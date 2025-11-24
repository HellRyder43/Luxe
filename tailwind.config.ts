import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // HEADINGS: Editorial/Premium feel
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        // BODY: Clean/Modern feel
        sans: ["var(--font-inter)", ...fontFamily.sans],
        // ACCENT: For special callouts (optional)
        mono: ["var(--font-jetbrains)", ...fontFamily.mono],
      },
      fontSize: {
        // Custom sizes for better hierarchy
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }], // 10px
        'hero': ['clamp(2.5rem, 8vw, 5.5rem)', { lineHeight: '1.1' }],
        'display': ['clamp(2rem, 6vw, 4rem)', { lineHeight: '1.2' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAFA", // Off-white Alabaster (Premium Base)
        foreground: "#1A1A1A", // Soft Black

        // ENHANCED LUXURY PALETTE
        premium: {
          // Core colors
          black: "#1A1A1A",
          charcoal: "#333333",
          graphite: "#4A4A4A", // Added mid-tone
          taupe: "#A69F93",
          sage: "#9CA69C",
          cream: "#FDFBF7",
          sand: "#E5E0D8",
          pearl: "#F8F6F3", // Added light accent

          // Accent colors for CTAs/Highlights
          gold: {
            light: "#D4AF37",  // Subtle gold
            DEFAULT: "#B8952C", // Muted gold
            dark: "#9A7B24",   // Deep gold
          },
          rose: {
            light: "#E8D5D5",  // Blush
            DEFAULT: "#D4A5A5", // Dusty rose
            dark: "#B08585",   // Deep rose
          }
        },

        // Status colors (muted for luxury feel)
        success: {
          DEFAULT: "#7C9885", // Sage green
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#C4A572", // Warm sand
          foreground: "#1A1A1A",
        },
        error: {
          DEFAULT: "#B08585", // Dusty rose
          foreground: "#FFFFFF",
        },

        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F4F4F5",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#F4F4F5",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
      },
      spacing: {
        // Custom spacing for luxury layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Custom radii
        'xs': '2px',
        'pill': '9999px',
      },
      boxShadow: {
        // Subtle, elegant shadows
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px -4px rgba(0, 0, 0, 0.12)',
        'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 40px -10px rgba(212, 175, 55, 0.25)', // Gold glow
        'lift': '0 10px 30px -10px rgba(0, 0, 0, 0.20)',
      },
      backgroundImage: {
        // Premium gradients
        'premium-gradient': 'linear-gradient(135deg, #FDFBF7 0%, #F8F6F3 50%, #FAFAFA 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
        'subtle-radial': 'radial-gradient(circle at top, #FFFFFF 0%, #FAFAFA 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Enhanced Premium Animations
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "reveal-img": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-1000px 0"
          },
          "100%": {
            backgroundPosition: "1000px 0"
          }
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.7"
          }
        },
        "slide-in-cart": {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        "slide-out-cart": {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "marquee": {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-down": "fade-in-down 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-left": "fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-right": "fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "reveal": "reveal-img 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-cart": "slide-in-cart 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-cart": "slide-out-cart 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "zoom-in": "zoom-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "float": "float 3s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
        'xl': '40px',
      },
      gridTemplateColumns: {
        // Custom grid for product layouts
        'auto-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      aspectRatio: {
        // Product image ratios
        'product': '3 / 4', // Portrait for fashion
        'square': '1 / 1',
        'landscape': '4 / 3',
        'hero': '21 / 9',
        'banner': '16 / 9',
      },
      letterSpacing: {
        'luxury': '0.05em',
        'wide-luxury': '0.1em',
        'ultra-wide': '0.2em',
      },
      lineHeight: {
        'luxury': '1.8',
        'relaxed-luxury': '2',
      },
      screens: {
        // Additional breakpoints for fine control
        'xs': '475px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Optional: Add these plugins for extra functionality
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/container-queries"),
  ],
  // Custom CSS variable definitions
  corePlugins: {
    // Ensure these are enabled for best performance
    preflight: true,
    container: true,
  },
} satisfies Config;

export default config;
