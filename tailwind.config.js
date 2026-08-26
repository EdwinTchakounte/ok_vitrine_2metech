/** @type {import('tailwindcss').Config} */

/* Helper: semantic token bound to a CSS variable (space-separated RGB triplet). */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },

    /* ----------------------------------------------------------------
       RADIUS — deliberately tight. The whole scale is overridden (not
       extended) so every existing `rounded-*` in the codebase collapses
       to a sharp, architectural value. `full` is kept for the few things
       that must be circles (avatars, status dots, ping indicators).
       ---------------------------------------------------------------- */
    borderRadius: {
      none: '0px',
      px: '1px',
      sm: '2px',
      DEFAULT: '3px',
      md: '4px',
      lg: '5px',
      xl: '6px',
      '2xl': '8px',
      '3xl': '10px',
      '4xl': '12px',
      '5xl': '14px',
      full: '9999px',
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)',
        'fluid-sm': 'clamp(0.875rem, 0.84rem + 0.2vw, 0.9375rem)',
        'fluid-base': 'clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)',
        'fluid-lg': 'clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)',
        'fluid-xl': 'clamp(1.1875rem, 1.1rem + 0.4vw, 1.375rem)',
        'fluid-2xl': 'clamp(1.375rem, 1.25rem + 0.7vw, 1.75rem)',
        'fluid-3xl': 'clamp(1.625rem, 1.4rem + 1.15vw, 2.25rem)',
        'fluid-4xl': 'clamp(1.875rem, 1.55rem + 1.7vw, 2.75rem)',
        'fluid-5xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
        'fluid-6xl': 'clamp(2.5rem, 1.8rem + 3.4vw, 4.25rem)',
        'fluid-7xl': 'clamp(2.875rem, 1.9rem + 4.6vw, 5.25rem)',
      },

      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        display: '-0.02em',
      },

      colors: {
        /* Semantic surface / text / border tokens — resolved from CSS
           variables so light and dark themes share one class vocabulary. */
        canvas: token('canvas'),
        surface: {
          DEFAULT: token('surface'),
          sunken: token('surface-sunken'),
          raised: token('surface-raised'),
          hover: token('surface-hover'),
        },
        line: {
          DEFAULT: token('line'),
          strong: token('line-strong'),
        },
        fg: {
          DEFAULT: token('fg'),
          muted: token('fg-muted'),
          subtle: token('fg-subtle'),
        },
        /* Inverted band — stays dark in both themes but keeps enough
           separation from the page background in dark mode. */
        invert: {
          DEFAULT: token('invert'),
          raised: token('invert-raised'),
        },

        brand: {
          blue: {
            50: '#eef6fc',
            100: '#d6eaf6',
            200: '#a6d0ea',
            300: '#6cb1dc',
            400: '#3a93cc',
            500: '#1876bc',
            600: '#125f99',
            700: '#0e4a78',
            800: '#0b3a5e',
            900: '#082c47',
            950: '#041829',
          },
          green: {
            50: '#f1f9e8',
            100: '#dff2cb',
            200: '#bfe69b',
            300: '#9fd96b',
            400: '#84c450',
            500: '#6ba93b',
            600: '#52852c',
            700: '#3e6422',
            800: '#2d4818',
            900: '#1c2d0f',
            950: '#0e1808',
          },
        },
        primary: {
          50: '#eef6fc',
          100: '#d6eaf6',
          200: '#a6d0ea',
          300: '#6cb1dc',
          400: '#3a93cc',
          500: '#1876bc',
          600: '#125f99',
          700: '#0e4a78',
          800: '#0b3a5e',
          900: '#082c47',
          950: '#041829',
          DEFAULT: '#1876bc',
        },
        secondary: {
          50: '#f1f9e8',
          100: '#dff2cb',
          200: '#bfe69b',
          300: '#9fd96b',
          400: '#84c450',
          500: '#6ba93b',
          600: '#52852c',
          700: '#3e6422',
          800: '#2d4818',
          900: '#1c2d0f',
          DEFAULT: '#84c450',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },

      backgroundImage: {
        'gradient-brand': 'linear-gradient(120deg, #1876bc 0%, #4ba36f 55%, #84c450 100%)',
        'gradient-brand-reverse': 'linear-gradient(120deg, #84c450 0%, #1876bc 100%)',
        'gradient-rule': 'linear-gradient(90deg, #1876bc, #84c450)',
      },

      /* Shadows are token-driven so they can be neutralised in dark mode,
         where separation comes from borders and surface steps instead. */
      boxShadow: {
        soft: 'var(--shadow-soft)',
        elevated: 'var(--shadow-elevated)',
        floating: 'var(--shadow-floating)',
        'inner-soft': 'inset 0 1px 0 0 rgb(var(--line) / 0.6)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        snappy: 'cubic-bezier(0.32, 0.72, 0, 1)',
        elegant: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 44s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'sweep-y': 'sweepY 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        sweepY: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '35%, 65%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },

      spacing: {
        18: '4.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },

      backdropBlur: {
        xs: '2px',
      },

      backgroundSize: {
        200: '200% 200%',
      },

      zIndex: {
        header: '50',
        drawer: '60',
        toast: '80',
      },
    },
  },
  plugins: [],
};
