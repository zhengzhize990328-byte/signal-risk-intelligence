export type Service = 'WhatsApp' | 'Facebook' | 'Telegram' | 'Zalo'
export const services = [
  { name:'WhatsApp', tone:'bg-[#e4f6ed] text-[#15865f]', mark:'W', checks:['Registration','Account details'], coverage:'Global' },
  { name:'Facebook', tone:'bg-[#e9efff] text-[#3564ca]', mark:'f', checks:['Registration'], coverage:'Global' },
  { name:'Telegram', tone:'bg-[#e5f3fb] text-[#2589ba]', mark:'➤', checks:['Registration','Account details'], coverage:'Global' },
  { name:'Zalo', tone:'bg-[#e9f1ff] text-[#3868c7]', mark:'Z', checks:['Registration'], coverage:'+84 Vietnam' },
]
export const recentChecks = [
  { id:'CHK-2048', service:'WhatsApp', identifier:'+1 ••••••98', result:'Registered', time:'2 min ago', tone:'text-[#147d5d] bg-[#e7f6ef]' },
  { id:'CHK-2047', service:'Facebook', identifier:'ma••••@northstar.co', result:'Not registered', time:'18 min ago', tone:'text-[#9b5b16] bg-[#fff3df]' },
  { id:'CHK-2046', service:'Telegram', identifier:'+44 ••••••58', result:'Registered', time:'42 min ago', tone:'text-[#147d5d] bg-[#e7f6ef]' },
  { id:'CHK-2045', service:'Zalo', identifier:'+84 ••••••10', result:'Unknown', time:'1 hr ago', tone:'text-[#6c7d86] bg-[#eef2f1]' },
]

export function maskIdentifier(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return '—'
  if (trimmed.includes('@')) {
    const parts = trimmed.split('@')
    return parts[0].slice(0, 2) + '••••@' + parts[1]
  }
  const compact = trimmed.replace(/\s+/g, '')
  return compact.length > 6 ? compact.slice(0, 3) + '••••' + compact.slice(-2) : '••••'
}
