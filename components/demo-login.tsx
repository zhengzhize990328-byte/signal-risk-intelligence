'use client'

const Link = ({ href, ...props }: any) => <a href={href} {...props} />
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Button, Logo } from '@/components/ui'

export function DemoLogin({ locale }: { locale: 'zh' | 'en' }) {
  const router = useRouter()
  const zh = locale === 'zh'
  const prefix = zh ? '/zh' : '/en'
  function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.cookie = 'signal-demo-auth=1; path=/; max-age=86400; samesite=lax'
    const requested = new URLSearchParams(window.location.search).get('returnTo')
    const safeReturnTo = requested && requested.startsWith('/') && !requested.startsWith('//') ? requested : `${prefix}/dashboard`
    router.replace(safeReturnTo)
  }
  return <main className='grid min-h-screen lg:grid-cols-2'><div className='hidden bg-ink p-10 text-white lg:flex lg:flex-col lg:justify-between'><Logo/><div><p className='text-xs font-bold uppercase tracking-[.18em] text-[#89d1bf]'>{zh ? 'SIGNAL 工作台' : 'SIGNAL workspace'}</p><h1 className='mt-5 max-w-md text-5xl font-semibold leading-tight'>{zh ? '看见标识符背后的信号。' : 'See the signal behind the identifier.'}</h1><p className='mt-5 max-w-md leading-7 text-white/60'>{zh ? '统一访问身份认证、反欺诈、账号情报、本地数据与 eKYC 能力的风险情报工作台。' : 'A unified risk intelligence console for identity, fraud, account intelligence, local data and eKYC.'}</p></div><p className='text-xs text-white/40'>{zh ? '为构建更安全数字产品的团队而生。' : 'Trusted by teams building safer digital products.'}</p></div><div className='flex items-center justify-center px-6 py-12'><div className='w-full max-w-md'><div className='mb-10 lg:hidden'><Logo/></div><p className='text-xs font-bold uppercase tracking-[.18em] text-teal'>{zh ? '欢迎回来' : 'Welcome back'}</p><h2 className='mt-3 text-3xl font-semibold tracking-[-.03em]'>{zh ? '登录 SIGNAL' : 'Sign in to SIGNAL'}</h2><p className='mt-3 text-sm text-[var(--muted)]'>{zh ? '使用工作邮箱继续。' : 'Use your work email to continue.'}</p><form className='mt-8 space-y-4' onSubmit={signIn}><label className='block text-sm font-semibold'>{zh ? '工作邮箱' : 'Work email'}<input required type='email' placeholder='you@company.com' className='mt-2 w-full rounded-lg border border-[var(--line)] px-3.5 py-3 outline-none focus:border-teal'/></label><label className='block text-sm font-semibold'>{zh ? '密码' : 'Password'}<input required type='password' placeholder='••••••••' className='mt-2 w-full rounded-lg border border-[var(--line)] px-3.5 py-3 outline-none focus:border-teal'/></label><Button type='submit' className='mt-2 w-full'>{zh ? '登录' : 'Continue to Demo Workspace'} <ArrowRight size={16}/></Button></form><p className='mt-8 text-center text-sm text-[var(--muted)]'>{zh ? '还没有 SIGNAL 账户？' : 'New to SIGNAL?'} <Link href={`${prefix}/signup`} className='font-semibold text-teal'>{zh ? '申请访问' : 'Request access'}</Link></p></div></div></main>
}
