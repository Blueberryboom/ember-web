import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./content/**/*.{md,mdx}'], theme: { extend: { colors: { ember: { 400:'#fb923c', 500:'#f97316', 600:'#ea580c' } }, boxShadow: { glow:'0 0 40px rgba(249,115,22,.18)' } } }, plugins: [] } satisfies Config;
