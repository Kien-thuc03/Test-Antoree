/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                secondary: {
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
                },
                brand: {
                    dark: '#06261D',      // Màu xanh đậm
                    light: '#57F27E',     // Màu xanh lá sáng
                    primary: '#2933F2',   // Màu xanh dương chính
                    secondary: '#4951F2', // Màu xanh dương phụ
                    accent: '#C599F2',    // Màu tím nhạt
                },
                // Bảng màu mới theo yêu cầu
                antoree: {
                    purple: '#C599F2',    // Tím nhạt
                    blue: '#2933F2',      // Xanh dương đậm
                    blueLight: '#4951F2', // Xanh dương nhạt
                    green: '#06261D',     // Xanh đậm
                    greenLight: '#57F27E', // Xanh lá sáng
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'system-ui', 'sans-serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                },
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-subtle': 'bounce 1s infinite',
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-in-up': 'slideInUp 0.6s ease-out',
                'slide-in-down': 'slideInDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'shimmer': 'shimmer 1.5s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInDown: {
                    '0%': { transform: 'translateY(-30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200px 0' },
                    '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
                'glow-green': '0 0 20px rgba(34, 197, 94, 0.4)',
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'lifted': '0 10px 40px rgba(0, 0, 0, 0.12)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}