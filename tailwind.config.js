/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
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
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Montserrat', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid typography (clamp based)
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.7rem + 2.75vw, 3rem)',
        'fluid-5xl': 'clamp(2.75rem, 2rem + 3.75vw, 4rem)',
        'fluid-6xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
        'fluid-7xl': 'clamp(3.5rem, 2.2rem + 6.5vw, 6rem)',
      },
      colors: {
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
        'gradient-brand': 'linear-gradient(135deg, #1876bc 0%, #84c450 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #84c450 0%, #1876bc 100%)',
        'gradient-brand-soft':
          'linear-gradient(135deg, rgba(24,118,188,0.08) 0%, rgba(132,196,80,0.08) 100%)',
        'gradient-radial':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-mesh':
          'radial-gradient(at 20% 20%, rgba(24,118,188,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(132,196,80,0.22) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(24,118,188,0.18) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(132,196,80,0.18) 0px, transparent 50%)',
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 4px 16px -4px rgba(15, 23, 42, 0.06)',
        elevated:
          '0 8px 32px -8px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.08)',
        floating:
          '0 24px 48px -16px rgba(15, 23, 42, 0.18), 0 8px 24px -4px rgba(15, 23, 42, 0.10)',
        glow: '0 0 32px -4px rgba(24, 118, 188, 0.35)',
        'glow-green': '0 0 32px -4px rgba(132, 196, 80, 0.35)',
        'glow-brand':
          '0 8px 32px -8px rgba(24, 118, 188, 0.4), 0 0 0 1px rgba(132, 196, 80, 0.15)',
        'inner-soft': 'inset 0 1px 2px 0 rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        snappy: 'cubic-bezier(0.32, 0.72, 0, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        elegant: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-x': 'gradientX 8s ease infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear infinite reverse',
        blob: 'blob 14s ease-in-out infinite',
        'border-spin': 'borderSpin 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px -4px rgba(24,118,188,0.35)' },
          '50%': { boxShadow: '0 0 40px -2px rgba(132,196,80,0.55)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        borderSpin: {
          '100%': { transform: 'rotate(-360deg)' },
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
        '200': '200% 200%',
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
};
