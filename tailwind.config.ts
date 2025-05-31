import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
  plugins: [nextui()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
  	extend: {
		
  		animation: {
  			first: 'moveVertical 30s ease infinite',
  			second: 'moveInCircle 20s reverse infinite',
  			third: 'moveInCircle 40s linear infinite',
  			fourth: 'moveHorizontal 40s ease infinite',
  			fifth: 'moveInCircle 20s ease infinite'
  		},
  		keyframes: {
  			moveHorizontal: {
  				'0%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				},
  				'50%': {
  					transform: 'translateX(50%) translateY(10%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				}
  			},
  			moveInCircle: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveVertical: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'50%': {
  					transform: 'translateY(50%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			},
			  spin: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
			  },
  		},
  		colors: {
  			// background: 'rgb(14, 20, 23)',
  			background: '#F3F3F3',
  			backgroundParallax: 'rgba(211, 211, 211, 1)',
  			foreground: 'var(--foreground)',
			btnStackColor: "rgba(22, 22, 22, 0.28)",
			blurRosa: "rgba(161, 102, 102, 0.78)",
			blurAzul: "rgba(102, 121, 161, 0.78)",
			blurcafe: "rgba(161, 133, 102, 0.78)",
			blurDark: "rgba(41, 41, 41, 0.91)",
  			purple: '#4D3685',
			// textColor: "rgb(157, 170, 179)",
			textColor: "#1D1D1D",
			textRed: "#B14B4B"
  		},
  		borderRadius: {
  			lg: 'calc(var(--radius) - 1px)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			inter: ["var(--font-inter)"],
			frank: ["var(--font-frank)"],
			dm: ["var(--font-dm)"],
		},
		backgroundImage: {
			'noise': "url('https://www.transparenttextures.com/patterns/noise.png')",
			'linear-gradient': 'linear-gradient(90deg, #8184B2 0%, #1D6A66 25%, #376A83 50%, #446790 75%, #8184B2 100%)',
		},
		screens: {
			'3xl': '1800px',  // ejemplo para pantallas muy grandes
		  },
		  backdropBlur: {
			'3xl': '20px', // Nivel de desenfoque para backdrop-blur-3xl
		  },
  	}
  },
} satisfies Config;
