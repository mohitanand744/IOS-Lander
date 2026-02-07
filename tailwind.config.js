/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1.5s infinite',
        blink: 'blink 0.5s linear 3',
        pulseBounce: 'pulseBounce 1.8s ease-in-out infinite',
        ringShake: 'ringShake 1s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        pulseBounce: {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 10px 24px rgba(199, 0, 0, 0.35), 0 0 0 6px rgba(255, 59, 59, 0.12) inset' 
          },
          '50%': { 
            transform: 'translateY(-6px) scale(1.05)',
            boxShadow: '0 16px 32px rgba(199, 0, 0, 0.45), 0 0 0 8px rgba(255, 59, 59, 0.16) inset' 
          },
        },
        ringShake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(16deg)' },
          '20%': { transform: 'rotate(-16deg)' },
          '30%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(8deg)' },
          '60%': { transform: 'rotate(-8deg)' },
          '70%': { transform: 'rotate(4deg)' },
          '80%': { transform: 'rotate(-4deg)' },
        }
      }
    },
  },
  plugins: [],
}
