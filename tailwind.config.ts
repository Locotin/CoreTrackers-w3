import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'float-1': {
          '0%': { transform: 'translateY(0px) rotate(-12deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-10deg)' },
          '100%': { transform: 'translateY(0px) rotate(-12deg)' },
        },
        'float-2': {
          '0%': { transform: 'translateY(0px) rotate(6deg)' },
          '50%': { transform: 'translateY(-12px) rotate(8deg)' },
          '100%': { transform: 'translateY(0px) rotate(6deg)' },
        },
        'float-3': {
          '0%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
          '100%': { transform: 'translateY(0px) rotate(3deg)' },
        },
        'float-4': {
          '0%': { transform: 'translateY(0px) rotate(-6deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-8deg)' },
          '100%': { transform: 'translateY(0px) rotate(-6deg)' },
        },
        'float-5': { '0%': { transform: 'translate(0, 0) rotate(5deg)' }, '50%': { transform: 'translate(5px, -10px) rotate(3deg)' }, '100%': { transform: 'translate(0, 0) rotate(5deg)' } },
        'float-6': { '0%': { transform: 'translate(0, 0) rotate(-5deg)' }, '50%': { transform: 'translate(-5px, -8px) rotate(-7deg)' }, '100%': { transform: 'translate(0, 0) rotate(-5deg)' } },
        'float-7': { '0%': { transform: 'translate(0, 0) rotate(8deg)' }, '50%': { transform: 'translate(8px, -12px) rotate(10deg)' }, '100%': { transform: 'translate(0, 0) rotate(8deg)' } },
        'float-8': { '0%': { transform: 'translate(0, 0) rotate(-10deg)' }, '50%': { transform: 'translate(-10px, -5px) rotate(-12deg)' }, '100%': { transform: 'translate(0, 0) rotate(-10deg)' } },
        'float-9': { '0%': { transform: 'translate(0, 0) rotate(2deg)' }, '50%': { transform: 'translate(3px, -6px) rotate(4deg)' }, '100%': { transform: 'translate(0, 0) rotate(2deg)' } },
        'float-10': { '0%': { transform: 'translate(0, 0) rotate(-2deg)' }, '50%': { transform: 'translate(-3px, -4px) rotate(0deg)' }, '100%': { transform: 'translate(0, 0) rotate(-2deg)' } },
        'float-11': { '0%': { transform: 'translate(0, 0) rotate(12deg)' }, '50%': { transform: 'translate(10px, -15px) rotate(14deg)' }, '100%': { transform: 'translate(0, 0) rotate(12deg)' } },
        'float-12': { '0%': { transform: 'translate(0, 0) rotate(-14deg)' }, '50%': { transform: 'translate(-12px, -8px) rotate(-16deg)' }, '100%': { transform: 'translate(0, 0) rotate(-14deg)' } },
        'float-13': { '0%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(2px, -5px) rotate(2deg)' }, '100%': { transform: 'translate(0, 0) rotate(0deg)' } },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 50s ease-out',
  			'accordion-up': 'accordion-up 50s ease-out',
        'float-1': 'float-1 1500s ease-in-out infinite',
        'float-2': 'float-2 300s ease-in-out infinite',
        'float-3': 'float-3 180s ease-in-out infinite',
        'float-4': 'float-4 195s ease-in-out infinite',
        'float-5': 'float-5 144s ease-in-out infinite',
        'float-6': 'float-6 156s ease-in-out infinite',
        'float-7': 'float-7 174s ease-in-out infinite',
        'float-8': 'float-8 186s ease-in-out infinite',
        'float-9': 'float-9 162s ease-in-out infinite',
        'float-10': 'float-10 168s ease-in-out infinite',
        'float-11': 'float-11 192s ease-in-out infinite',
        'float-12': 'float-12 204s ease-in-out infinite',
        'float-13': 'float-13 138s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
