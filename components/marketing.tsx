'use client'

// Native anchors keep hosted navigation reliable while preserving all existing routes.
const Link = ({ href, ...props }: any) => <a href={href} {...props} />
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Network, X } from 'lucide-react'
import LocaleSwitch from '@/components/locale-switch'

type MarketingLocale = 'zh' | 'en'

export const navigationConfig = [
  { key: 'products', path: '/products', zh: '产品能力', en: 'Products' },
  { key: 'solutions', path: '/solutions/consumer-lending', zh: '解决方案', en: 'Solutions' },
  { key: 'coverage', path: '/coverage', zh: '全球覆盖', en: 'Coverage' },
  { key: 'developers', path: '/developers', zh: '开发者', en: 'Developers' },
  { key: 'company', path: '/company', zh: '关于我们', en: 'Company' },
] as const

export function MarketingHeader({ dark = false, locale = 'zh' }: { dark?: boolean; locale?: MarketingLocale }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const ink = dark ? 'text-white' : 'text-ink'
  const muted = dark ? 'text-white/60 hover:text-white' : 'text-[var(--muted)] hover:text-ink'
  const zh = locale === 'zh'
  const href = (path: string) => zh ? `/zh${path}` : `/en${path}`
  const actionLabel = authenticated ? (zh ? '打开控制台' : 'Open Console') : (zh ? '登录' : 'Login')
  const actionPath = authenticated ? '/dashboard' : '/login'
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    setAuthenticated(document.cookie.split('; ').some(cookie => cookie === 'signal-demo-auth=1'))
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={'sticky top-0 z-40 border-b transition-colors duration-300 ' + (scrolled ? (dark ? 'border-white/10 bg-[#10252d]/95' : 'border-[#d9e5e1] bg-[#f7faf9]/95') : 'border-transparent bg-transparent')}>
    <div className={'mx-auto max-w-[1440px] px-6 py-5 lg:px-12 ' + ink}>
      <div className='flex items-center justify-between'>
        <Link href={href('')} className='flex items-center gap-3 text-sm font-semibold tracking-[.22em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ce1cc]'><span className={'grid h-8 w-8 place-items-center border ' + (dark ? 'border-[#8ce1cc]/60 text-[#8ce1cc]' : 'border-[#0e8b83]/40 text-[#0e8b83]')}><Network size={15}/></span>SIGNAL</Link>
        <nav className='hidden items-center gap-7 text-xs lg:flex' aria-label={zh ? '主导航' : 'Primary navigation'}>{navigationConfig.map(item => <Link key={item.key} href={href(item.path)} className={muted}>{zh ? item.zh : item.en}</Link>)}</nav>
        <div className='hidden items-center gap-4 text-xs lg:flex'>
          {zh ? <span className={muted}>中文</span> : <LocaleSwitch target='zh' label='中文' className={muted} />}
          {zh ? <LocaleSwitch target='en' label='EN' className={muted} /> : <span className={muted}>EN</span>}
          <Link href={href(actionPath)} className={muted}>{actionLabel}</Link>
          <Link href={href('/contact-sales')} className={'border px-4 py-2.5 font-semibold ' + (dark ? 'border-[#8ce1cc]/60 text-[#d9fff6] hover:bg-[#8ce1cc] hover:text-[#10252d]' : 'border-[#0e8b83]/40 text-[#0e6f69] hover:bg-[#0e8b83] hover:text-white')}>{zh ? '联系销售' : 'Talk to Sales'} <ArrowUpRight size={14} className='ml-1 inline'/></Link>
        </div>
        <button type='button' aria-label={menuOpen ? (zh ? '关闭导航' : 'Close menu') : (zh ? '打开导航' : 'Open menu')} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)} className={'grid h-10 w-10 place-items-center border lg:hidden ' + (dark ? 'border-white/15 text-white' : 'border-[var(--line)] text-ink')}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      {menuOpen && <nav className={'mt-4 grid gap-1 border-t pt-4 text-sm lg:hidden ' + (dark ? 'border-white/10 text-white/75' : 'border-[var(--line)] text-[var(--muted)]')} aria-label={zh ? '移动导航' : 'Mobile navigation'}>{navigationConfig.map(item => <Link key={item.key} href={href(item.path)} onClick={() => setMenuOpen(false)} className='px-2 py-2.5 hover:text-[#8ce1cc]'>{zh ? item.zh : item.en}</Link>)}<div className={'flex items-center gap-3 border-t px-2 pt-4 text-xs ' + (dark ? 'border-white/10' : 'border-[var(--line)]')}>{zh ? <span className={muted}>中文</span> : <LocaleSwitch target='zh' label='中文' className={muted} />}{zh ? <LocaleSwitch target='en' label='EN' className={muted} /> : <span className={muted}>EN</span>}</div><Link href={href(actionPath)} onClick={() => setMenuOpen(false)} className='px-2 py-2.5'>{actionLabel}</Link><Link href={href('/contact-sales')} onClick={() => setMenuOpen(false)} className='px-2 py-2.5 font-semibold text-[#0e8b83]'>{zh ? '联系销售' : 'Talk to Sales'}</Link></nav>}
    </div>
  </header>
}

export function MarketingHeaderZh({ dark = false }: { dark?: boolean }) {
  return <MarketingHeader dark={dark} locale='zh'/>
}

export function MarketingFooter({ locale = 'zh' }: { locale?: MarketingLocale }) {
  const zh = locale === 'zh'
  const href = (path: string) => `/${locale}${path}`
  const groups = [
    { title: zh ? '产品能力' : 'Products', links: [[zh ? '身份认证与 KYC' : 'Identity & KYC', '/products'], [zh ? '反欺诈与风险情报' : 'Fraud Intelligence', '/products#fraud'], [zh ? '全球账号情报' : 'Account Intelligence', '/products#account-intelligence'], [zh ? '本地数据与 eKYC' : 'Local Data & eKYC', '/products']] },
    { title: zh ? '解决方案' : 'Solutions', links: [[zh ? '消费信贷' : 'Consumer Lending', '/solutions/consumer-lending']] },
    { title: zh ? '开发者' : 'Developers', links: [[zh ? '开发者中心' : 'Developer infrastructure', '/developers'], [zh ? 'API 文档' : 'API Docs', '/developers']] },
    { title: zh ? '关于我们' : 'Company', links: [[zh ? '关于 SIGNAL' : 'About SIGNAL', '/company'], [zh ? '联系销售' : 'Contact Sales', '/contact-sales']] },
    { title: zh ? '法律' : 'Legal', links: [[zh ? '隐私政策' : 'Privacy', '/coming-soon'], [zh ? '服务条款' : 'Terms', '/coming-soon']] },
  ] as const
  return <footer id='footer' className='border-t border-[#d9e5e1] bg-[#f7faf9]'><div className='mx-auto max-w-[1440px] px-6 py-14 lg:px-12'><div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)]'><div><Link href={href('')} className='flex items-center gap-3 font-semibold tracking-[.22em] text-[#10252d]'><span className='grid h-8 w-8 place-items-center border border-[#0e8b83]/40 text-[#0e8b83]'><Network size={14}/></span>SIGNAL</Link><p className='mt-5 max-w-xs text-sm leading-6 text-[#718389]'>{zh ? '面向新兴市场的全球风险情报基础设施。' : 'Global risk intelligence infrastructure for emerging markets.'}</p></div>{groups.map(group => <div key={group.title}><p className='text-xs font-semibold uppercase tracking-[.14em] text-[#10252d]'>{group.title}</p><div className='mt-4 grid gap-3'>{group.links.map(([label, path]) => <Link key={label} href={href(path)} className='text-sm text-[#718389] hover:text-[#0e8b83]'>{label}</Link>)}</div></div>)}</div><div className='mt-12 flex flex-col gap-3 border-t border-[#d9e5e1] pt-5 text-xs text-[#718389] sm:flex-row sm:items-center sm:justify-between'><span>{zh ? '© 2026 SIGNAL。风险情报基础设施。' : '© 2026 SIGNAL. Risk intelligence infrastructure.'}</span><span>{zh ? 'Demo 环境 · 不查询真实数据' : 'Demo environment · No real data queried'}</span></div></div></footer>
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={'eyebrow ' + (dark ? 'text-[#8ce1cc]' : '')}>{children}</p>
}

export function SignalPill({ children, tone = 'teal' }: { children: React.ReactNode; tone?: 'teal' | 'amber' | 'blue' | 'violet' }) {
  const styles = { teal: 'border-[#b9e8dc] bg-[#edf9f5] text-[#0e746c]', amber: 'border-[#eed5ac] bg-[#fff8eb] text-[#94601d]', blue: 'border-[#c9dced] bg-[#f1f7fc] text-[#3b6d98]', violet: 'border-[#d9cfee] bg-[#f7f3fd] text-[#6d56a0]' }
  return <span className={'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ' + styles[tone]}>{children}</span>
}
