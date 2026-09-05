'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export function DashboardLogout({ locale }: { locale: 'zh' | 'en' }) {
  const router = useRouter()
  const zh = locale === 'zh'
  function signOut() {
    document.cookie = 'signal-demo-auth=; path=/; max-age=0; samesite=lax'
    router.replace(zh ? '/zh/login' : '/en/login')
  }
  return <button type='button' onClick={signOut} className='fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-xs font-semibold text-[var(--muted)] shadow-sm transition hover:border-teal hover:text-teal' aria-label={zh ? '退出演示工作区' : 'Log out of demo workspace'}><LogOut size={14}/>{zh ? '退出演示' : 'Log out'}</button>
}
