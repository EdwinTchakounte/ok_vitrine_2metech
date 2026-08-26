import React, { useMemo } from 'react';
import { encodeQR, matrixToPath, type Ecc } from '../../lib/qr';

interface QRCodeProps {
  /** The exact string encoded in the symbol. */
  value: string;
  /** Rendered edge length in pixels. */
  size?: number;
  ecc?: Ecc;
  /** Quiet-zone width, in modules. The spec asks for 4. */
  quiet?: number;
  dark?: string;
  light?: string;
  className?: string;
  title?: string;
}

/**
 * Renders `value` as a real, scannable QR symbol. The matrix is computed
 * in-browser, with no image service and no network call, so the code can never
 * drift out of sync with the link it points at.
 */
export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 200,
  ecc = 'Q',
  quiet = 4,
  dark = '#0f172a',
  light = '#ffffff',
  className,
  title,
}) => {
  const { path, dim } = useMemo(() => {
    const matrix = encodeQR(value, ecc);
    return {
      path: matrixToPath(matrix, quiet),
      dim: matrix.length + quiet * 2,
    };
  }, [value, ecc, quiet]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${dim} ${dim}`}
      className={className}
      role="img"
      aria-label={title ?? value}
      shapeRendering="crispEdges"
    >
      {title && <title>{title}</title>}
      <rect width={dim} height={dim} fill={light} />
      <path d={path} fill={dark} />
    </svg>
  );
};

export default QRCode;
