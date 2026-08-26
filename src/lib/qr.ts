/* ============================================================
   Minimal QR Code encoder (byte mode, versions 1 to 40).
   Self-contained on purpose: the download QR must encode the real
   URL without pulling in a dependency or calling a remote image
   service. Follows ISO/IEC 18004.
   ============================================================ */

export type Ecc = 'L' | 'M' | 'Q' | 'H';

/** Format-info bits per error-correction level. */
const ECC_FORMAT_BITS: Record<Ecc, number> = { L: 1, M: 0, Q: 3, H: 2 };
/** Table index per error-correction level. */
const ECC_INDEX: Record<Ecc, number> = { L: 0, M: 1, Q: 2, H: 3 };

// prettier-ignore
const ECC_CODEWORDS_PER_BLOCK: number[][] = [
  // 0(unused), then versions 1..40
  [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // L
  [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // M
  [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // Q
  [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // H
];

// prettier-ignore
const NUM_ECC_BLOCKS: number[][] = [
  [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], // L
  [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], // M
  [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], // Q
  [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81], // H
];

/* ---------------- GF(256) arithmetic, primitive polynomial 0x11D ---------------- */

function gfMultiply(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z & 0xff;
}

/** Generator polynomial coefficients for `degree` ECC codewords. */
function reedSolomonDivisor(degree: number): number[] {
  const result = new Array<number>(degree).fill(0);
  result[degree - 1] = 1; // monic polynomial x^degree
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = gfMultiply(result[j], root);
      if (j + 1 < result.length) result[j] ^= result[j + 1];
    }
    root = gfMultiply(root, 0x02);
  }
  return result;
}

function reedSolomonRemainder(data: number[], divisor: number[]): number[] {
  const result = new Array<number>(divisor.length).fill(0);
  for (const b of data) {
    const factor = b ^ (result.shift() as number);
    result.push(0);
    divisor.forEach((d, i) => {
      result[i] ^= gfMultiply(d, factor);
    });
  }
  return result;
}

/* ---------------- Capacity helpers ---------------- */

/** Total data+ECC modules available for a version, in bits. */
function numRawDataModules(ver: number): number {
  let result = (16 * ver + 128) * ver + 64;
  if (ver >= 2) {
    const numAlign = Math.floor(ver / 7) + 2;
    result -= (25 * numAlign - 10) * numAlign - 55;
    if (ver >= 7) result -= 36;
  }
  return result;
}

/** Usable data capacity, in bits, for a version + ECC level. */
function numDataCodewords(ver: number, ecc: Ecc): number {
  const e = ECC_INDEX[ecc];
  return (
    Math.floor(numRawDataModules(ver) / 8) -
    ECC_CODEWORDS_PER_BLOCK[e][ver] * NUM_ECC_BLOCKS[e][ver]
  );
}

function charCountBits(ver: number): number {
  // Byte mode
  return ver <= 9 ? 8 : 16;
}

function alignmentPatternPositions(ver: number): number[] {
  if (ver === 1) return [];
  const numAlign = Math.floor(ver / 7) + 2;
  const step =
    ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (numAlign * 2 - 2)) * 2;
  const result: number[] = [6];
  for (let pos = ver * 4 + 10; result.length < numAlign; pos -= step) {
    result.splice(1, 0, pos);
  }
  return result;
}

/* ---------------- Bit buffer ---------------- */

class BitBuffer {
  bits: number[] = [];
  append(value: number, len: number) {
    for (let i = len - 1; i >= 0; i--) this.bits.push((value >>> i) & 1);
  }
}

/* ---------------- Matrix construction ---------------- */

class Matrix {
  size: number;
  modules: boolean[][];
  /** Modules occupied by function patterns: never carry data, never masked. */
  isFunction: boolean[][];

  constructor(ver: number) {
    this.size = ver * 4 + 17;
    this.modules = Array.from({ length: this.size }, () =>
      new Array<boolean>(this.size).fill(false),
    );
    this.isFunction = Array.from({ length: this.size }, () =>
      new Array<boolean>(this.size).fill(false),
    );
  }

  set(x: number, y: number, dark: boolean, fn = false) {
    this.modules[y][x] = dark;
    if (fn) this.isFunction[y][x] = true;
  }
}

function drawFinderPattern(m: Matrix, cx: number, cy: number) {
  for (let dy = -4; dy <= 4; dy++) {
    for (let dx = -4; dx <= 4; dx++) {
      const dist = Math.max(Math.abs(dx), Math.abs(dy));
      const x = cx + dx;
      const y = cy + dy;
      if (x >= 0 && x < m.size && y >= 0 && y < m.size) {
        m.set(x, y, dist !== 2 && dist !== 4, true);
      }
    }
  }
}

function drawAlignmentPattern(m: Matrix, cx: number, cy: number) {
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      m.set(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1, true);
    }
  }
}

function drawFunctionPatterns(m: Matrix, ver: number) {
  const size = m.size;

  // Timing patterns
  for (let i = 0; i < size; i++) {
    m.set(6, i, i % 2 === 0, true);
    m.set(i, 6, i % 2 === 0, true);
  }

  // Finder patterns (with their separators, handled by the -4..4 sweep)
  drawFinderPattern(m, 3, 3);
  drawFinderPattern(m, size - 4, 3);
  drawFinderPattern(m, 3, size - 4);

  // Alignment patterns
  const positions = alignmentPatternPositions(ver);
  const n = positions.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Skip the three corners occupied by finder patterns
      if ((i === 0 && j === 0) || (i === 0 && j === n - 1) || (i === n - 1 && j === 0)) {
        continue;
      }
      drawAlignmentPattern(m, positions[i], positions[j]);
    }
  }

  // Reserve format-info areas (written later) and the permanent dark module
  reserveFormatArea(m);
  if (ver >= 7) drawVersionInfo(m, ver);
}

function reserveFormatArea(m: Matrix) {
  const size = m.size;
  for (let i = 0; i <= 8; i++) {
    if (i !== 6) {
      m.set(i, 8, false, true);
      m.set(8, i, false, true);
    }
  }
  for (let i = 0; i < 8; i++) {
    m.set(size - 1 - i, 8, false, true);
    m.set(8, size - 1 - i, false, true);
  }
  m.set(8, size - 8, true, true); // dark module
}

function drawFormatInfo(m: Matrix, ecc: Ecc, mask: number) {
  const size = m.size;
  const data = (ECC_FORMAT_BITS[ecc] << 3) | mask;
  let rem = data;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  const bits = ((data << 10) | rem) ^ 0x5412;

  const bit = (i: number) => ((bits >>> i) & 1) === 1;

  // Top-left copy
  for (let i = 0; i <= 5; i++) m.set(8, i, bit(i), true);
  m.set(8, 7, bit(6), true);
  m.set(8, 8, bit(7), true);
  m.set(7, 8, bit(8), true);
  for (let i = 9; i < 15; i++) m.set(14 - i, 8, bit(i), true);

  // Split copy across the other two corners
  for (let i = 0; i < 8; i++) m.set(size - 1 - i, 8, bit(i), true);
  for (let i = 8; i < 15; i++) m.set(8, size - 15 + i, bit(i), true);
  m.set(8, size - 8, true, true); // dark module stays dark
}

function drawVersionInfo(m: Matrix, ver: number) {
  const size = m.size;
  let rem = ver;
  for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
  const bits = (ver << 12) | rem;

  for (let i = 0; i < 18; i++) {
    const dark = ((bits >>> i) & 1) === 1;
    const a = size - 11 + (i % 3);
    const b = Math.floor(i / 3);
    m.set(a, b, dark, true);
    m.set(b, a, dark, true);
  }
}

/** Zig-zag placement of the interleaved codeword stream. */
function drawCodewords(m: Matrix, data: number[]) {
  const size = m.size;
  let i = 0; // bit index

  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5; // the vertical timing pattern column is skipped
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? size - 1 - vert : vert;
        if (!m.isFunction[y][x] && i < data.length * 8) {
          m.modules[y][x] = ((data[i >>> 3] >>> (7 - (i & 7))) & 1) === 1;
          i++;
        }
        // Remaining modules past the data stream stay light (already false)
      }
    }
  }
}

function maskCondition(mask: number, x: number, y: number): boolean {
  switch (mask) {
    case 0: return (x + y) % 2 === 0;
    case 1: return y % 2 === 0;
    case 2: return x % 3 === 0;
    case 3: return (x + y) % 3 === 0;
    case 4: return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
    case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
    case 6: return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
    case 7: return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    default: throw new Error('bad mask');
  }
}

function applyMask(m: Matrix, mask: number) {
  for (let y = 0; y < m.size; y++) {
    for (let x = 0; x < m.size; x++) {
      if (!m.isFunction[y][x] && maskCondition(mask, x, y)) {
        m.modules[y][x] = !m.modules[y][x];
      }
    }
  }
}

/* ---- Penalty scoring (ISO 18004 §8.8.2), lower is better ----
   Rules 1 and 3 share a run-length history so finder-like 1:1:3:1:1
   sequences are counted the way conforming decoders expect. */

const PENALTY_N1 = 3;
const PENALTY_N2 = 3;
const PENALTY_N3 = 40;
const PENALTY_N4 = 10;

/** Count 1:1:3:1:1 finder-like sequences in the last 7 runs. */
function finderPatternsInHistory(h: number[]): number {
  const n = h[1];
  const core = n > 0 && h[2] === n && h[3] === n * 3 && h[4] === n && h[5] === n;
  return (
    (core && h[0] >= n * 4 && h[6] >= n ? 1 : 0) +
    (core && h[6] >= n * 4 && h[0] >= n ? 1 : 0)
  );
}

function addRunToHistory(runLength: number, h: number[], size: number) {
  if (h[0] === 0) runLength += size; // the light border counts as part of the first run
  h.pop();
  h.unshift(runLength);
}

function terminateAndCount(
  runColor: boolean,
  runLength: number,
  h: number[],
  size: number,
): number {
  if (runColor) {
    addRunToHistory(runLength, h, size);
    runLength = 0;
  }
  runLength += size; // light border after the final run
  addRunToHistory(runLength, h, size);
  return finderPatternsInHistory(h);
}

function penaltyScore(m: Matrix): number {
  const size = m.size;
  let result = 0;

  /* Rules 1 + 3, scanned row-wise then column-wise. */
  const scanLine = (get: (i: number) => boolean) => {
    let runColor = false;
    let run = 0;
    const history = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < size; i++) {
      if (get(i) === runColor) {
        run++;
        if (run === 5) result += PENALTY_N1;
        else if (run > 5) result++;
      } else {
        addRunToHistory(run, history, size);
        if (!runColor) result += finderPatternsInHistory(history) * PENALTY_N3;
        runColor = get(i);
        run = 1;
      }
    }
    result += terminateAndCount(runColor, run, history, size) * PENALTY_N3;
  };

  for (let y = 0; y < size; y++) scanLine((x) => m.modules[y][x]);
  for (let x = 0; x < size; x++) scanLine((y) => m.modules[y][x]);

  /* Rule 2: 2x2 blocks of a single colour. */
  for (let y = 0; y < size - 1; y++) {
    for (let x = 0; x < size - 1; x++) {
      const c = m.modules[y][x];
      if (
        c === m.modules[y][x + 1] &&
        c === m.modules[y + 1][x] &&
        c === m.modules[y + 1][x + 1]
      ) {
        result += PENALTY_N2;
      }
    }
  }

  /* Rule 4: deviation from an even dark/light balance. */
  let dark = 0;
  for (const row of m.modules) for (const c of row) if (c) dark++;
  const total = size * size;
  const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
  result += k * PENALTY_N4;

  return result;
}

/* ---------------- Public API ---------------- */

/**
 * Encode `text` as a QR matrix. Returns a square array of booleans
 * (true = dark module), without a quiet zone; callers add their own.
 */
export function encodeQR(text: string, ecc: Ecc = 'M'): boolean[][] {
  const bytes = Array.from(new TextEncoder().encode(text));

  // Smallest version that fits
  let ver = 1;
  for (; ver <= 40; ver++) {
    const capacity = numDataCodewords(ver, ecc) * 8;
    const needed = 4 + charCountBits(ver) + bytes.length * 8;
    if (needed <= capacity) break;
  }
  if (ver > 40) throw new Error('Data too long for a QR code');

  const dataCapacityBits = numDataCodewords(ver, ecc) * 8;

  // Byte-mode segment
  const bb = new BitBuffer();
  bb.append(0b0100, 4);
  bb.append(bytes.length, charCountBits(ver));
  for (const b of bytes) bb.append(b, 8);

  // Terminator + byte alignment + alternating pad codewords
  bb.append(0, Math.min(4, dataCapacityBits - bb.bits.length));
  bb.append(0, (8 - (bb.bits.length % 8)) % 8);
  for (let pad = 0xec; bb.bits.length < dataCapacityBits; pad ^= 0xec ^ 0x11) {
    bb.append(pad, 8);
  }

  const dataCodewords: number[] = [];
  for (let i = 0; i < bb.bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | bb.bits[i + j];
    dataCodewords.push(byte);
  }

  // Split into blocks, append ECC, then interleave
  const e = ECC_INDEX[ecc];
  const numBlocks = NUM_ECC_BLOCKS[e][ver];
  const blockEccLen = ECC_CODEWORDS_PER_BLOCK[e][ver];
  const rawCodewords = Math.floor(numRawDataModules(ver) / 8);
  const numShortBlocks = numBlocks - (rawCodewords % numBlocks);
  const shortBlockLen = Math.floor(rawCodewords / numBlocks);

  const divisor = reedSolomonDivisor(blockEccLen);
  const blocks: number[][] = [];
  for (let i = 0, k = 0; i < numBlocks; i++) {
    const len = shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1);
    const dat = dataCodewords.slice(k, k + len);
    k += len;
    const eccBytes = reedSolomonRemainder(dat, divisor);
    // Short blocks get a placeholder byte so every block has the same
    // length; the interleaver below skips it again.
    if (i < numShortBlocks) dat.push(0);
    blocks.push(dat.concat(eccBytes));
  }

  const interleaved: number[] = [];
  for (let i = 0; i < blocks[0].length; i++) {
    blocks.forEach((block, j) => {
      if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
        interleaved.push(block[i]);
      }
    });
  }

  // Build, mask, score
  const m = new Matrix(ver);
  drawFunctionPatterns(m, ver);
  drawCodewords(m, interleaved);

  let bestMask = 0;
  let bestScore = Infinity;
  for (let mask = 0; mask < 8; mask++) {
    applyMask(m, mask);
    drawFormatInfo(m, ecc, mask);
    const score = penaltyScore(m);
    if (score < bestScore) {
      bestScore = score;
      bestMask = mask;
    }
    applyMask(m, mask); // undo (XOR is its own inverse)
  }
  applyMask(m, bestMask);
  drawFormatInfo(m, ecc, bestMask);

  return m.modules;
}

/**
 * Render an encoded matrix as an SVG path `d` string, one square per
 * dark module, offset by `quiet` modules of margin.
 */
export function matrixToPath(matrix: boolean[][], quiet = 2): string {
  const parts: string[] = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[y][x]) parts.push(`M${x + quiet} ${y + quiet}h1v1h-1z`);
    }
  }
  return parts.join('');
}
