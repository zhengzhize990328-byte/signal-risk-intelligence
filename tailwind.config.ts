import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#10232f', teal: '#0e8b83', mist: '#f5f8f7' }, boxShadow: { soft: '0 12px 40px rgba(16,35,47,.08)' } } }, plugins: [animate] }
export default config
