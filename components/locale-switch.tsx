'use client'

import { usePathname } from 'next/navigation'

export default function LocaleSwitch({ target, label, className }: { target: 'zh' | 'en'; label: string; className?: string }) {
  const pathname = usePathname()
  const destination = target === 'en' ? '/en' : '/zh'
  const suffix = pathname?.replace(/^\/(zh|en)(?=\/|$)/, '') || ''
  const href = destination + (suffix || '')
  return <a href={href} className={className} onClick={() => { document.cookie = `signal-locale=${target}; path=/; max-age=31536000; samesite=lax` }}>{label}</a>
}
