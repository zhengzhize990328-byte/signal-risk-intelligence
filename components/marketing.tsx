'use client'

// Native anchors keep hosted navigation reliable while preserving all existing routes.
import { siteHref } from '@/lib/site-url'
const Link = ({ href, ...props }: any) => <a href={siteHref(href)} {...props} />
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Network, X } from 'lucide-react'
import LocaleSwitch from '@/components/locale-switch'

type MarketingLocale = 'zh' | 'en'

const cashLoanPlatform = {
  href: 'https://business.truenorthdata.org/',
  zh: '现金贷业务平台',
  en: 'Cash Loan Platform',
} as const

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
    setAuthenticated(document.cookie.split('; ').some(cookie => cookie === 'truenorth-demo-auth=1'))
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={'sticky top-0 z-40 border-b transition-colors duration-300 ' + (scrolled ? (dark ? 'border-white/10 bg-[#062B49]/95' : 'border-[#D9E7F3] bg-[#F6FAFF]/95') : 'border-transparent bg-transparent')}>
    <div className={'mx-auto max-w-[1440px] px-6 py-5 lg:px-12 ' + ink}>
      <div className='flex items-center justify-between'>
        <Link href={href('')} className='flex items-center gap-3 text-sm font-semibold tracking-[.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#56A9F2]'><img src={siteHref('/brand/truenorth-icon.svg')} alt='TrueNorth' className='h-8 w-8 rounded-md'/><span>TrueNorth</span></Link>
        <nav className='hidden items-center gap-7 text-xs lg:flex' aria-label={zh ? '主导航' : 'Primary navigation'}>{navigationConfig.map(item => <Link key={item.key} href={href(item.path)} className={muted}>{zh ? item.zh : item.en}</Link>)}</nav>
        <div className='hidden items-center gap-4 text-xs lg:flex'>
          <a href={cashLoanPlatform.href} target='_blank' rel='noopener noreferrer' className={'inline-flex items-center gap-1 border-r pr-4 ' + (dark ? 'border-white/15 ' : 'border-[#D9E7F3] ') + muted} aria-label={(zh ? cashLoanPlatform.zh : cashLoanPlatform.en) + (zh ? '（在新窗口打开）' : ' (opens in a new tab)')}>{zh ? cashLoanPlatform.zh : cashLoanPlatform.en}<ArrowUpRight size={13}/></a>
          {zh ? <span className={muted}>中文</span> : <LocaleSwitch target='zh' label='中文' className={muted} />}
          {zh ? <LocaleSwitch target='en' label='EN' className={muted} /> : <span className={muted}>EN</span>}
          <Link href={href(actionPath)} className={muted}>{actionLabel}</Link>
          <Link href={href('/contact-sales')} className={'border px-4 py-2.5 font-semibold ' + (dark ? 'border-[#56A9F2]/60 text-[#EAF5FF] hover:bg-[#56A9F2] hover:text-[#062B49]' : 'border-[#1E73BE]/40 text-[#0e6f69] hover:bg-[#1E73BE] hover:text-white')}>{zh ? '联系销售' : 'Talk to Sales'} <ArrowUpRight size={14} className='ml-1 inline'/></Link>
        </div>
        <button type='button' aria-label={menuOpen ? (zh ? '关闭导航' : 'Close menu') : (zh ? '打开导航' : 'Open menu')} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)} className={'grid h-10 w-10 place-items-center border lg:hidden ' + (dark ? 'border-white/15 text-white' : 'border-[var(--line)] text-ink')}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      {menuOpen && <nav className={'mt-4 grid gap-1 border-t pt-4 text-sm lg:hidden ' + (dark ? 'border-white/10 text-white/75' : 'border-[var(--line)] text-[var(--muted)]')} aria-label={zh ? '移动导航' : 'Mobile navigation'}>{navigationConfig.map(item => <Link key={item.key} href={href(item.path)} onClick={() => setMenuOpen(false)} className='px-2 py-2.5 hover:text-[#56A9F2]'>{zh ? item.zh : item.en}</Link>)}<a href={cashLoanPlatform.href} target='_blank' rel='noopener noreferrer' onClick={() => setMenuOpen(false)} className={'mt-2 flex items-center justify-between border-y px-2 py-3 font-semibold ' + (dark ? 'border-white/10 text-[#8BC6F8]' : 'border-[var(--line)] text-[#155C99]')}><span><span className='block text-[10px] font-medium uppercase tracking-[.14em] opacity-60'>{zh ? 'TrueNorth 独立业务平台' : 'Independent TrueNorth platform'}</span><span className='mt-1 block'>{zh ? cashLoanPlatform.zh : cashLoanPlatform.en}</span></span><ArrowUpRight size={16}/></a><div className={'flex items-center gap-3 px-2 pt-4 text-xs ' + (dark ? 'text-white/60' : 'text-[var(--muted)]')}>{zh ? <span className={muted}>中文</span> : <LocaleSwitch target='zh' label='中文' className={muted} />}{zh ? <LocaleSwitch target='en' label='EN' className={muted} /> : <span className={muted}>EN</span>}</div><Link href={href(actionPath)} onClick={() => setMenuOpen(false)} className='px-2 py-2.5'>{actionLabel}</Link><Link href={href('/contact-sales')} onClick={() => setMenuOpen(false)} className='px-2 py-2.5 font-semibold text-[#1E73BE]'>{zh ? '联系销售' : 'Talk to Sales'}</Link></nav>}
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
    { title: zh ? '关于我们' : 'Company', links: [[zh ? '关于 TrueNorth' : 'About TrueNorth', '/company'], [zh ? '联系销售' : 'Contact Sales', '/contact-sales']] },
    { title: zh ? '法律' : 'Legal', links: [[zh ? '隐私政策' : 'Privacy', '/coming-soon'], [zh ? '服务条款' : 'Terms', '/coming-soon']] },
  ] as const
  return <footer id='footer' className='border-t border-[#D9E7F3] bg-[#F6FAFF]'>
    <div className='mx-auto max-w-[1440px] px-6 py-14 lg:px-12'>
      <div className='relative mb-14 overflow-hidden border border-[#BFD8EA] bg-[#EAF5FC] text-[#062B49] shadow-[0_20px_60px_rgba(6,43,73,.09)]'>
        <div className='h-1 bg-[#56A9F2]'/>
        <div className='grid lg:grid-cols-[1.45fr_.75fr]'>
          <div className='p-7 sm:p-9 lg:p-11'>
            <div className='flex flex-wrap items-center gap-4'>
              <img src={siteHref('/brand/truenorth-icon.svg')} alt='' className='h-11 w-11 rounded-lg border border-white bg-white shadow-[0_8px_20px_rgba(6,43,73,.08)]'/>
              <div>
                <p className='text-[11px] font-semibold uppercase tracking-[.18em] text-[#1E73BE]'>{zh ? 'TrueNorth 业务平台' : 'TrueNorth Business Platforms'}</p>
                <p className='mt-1 text-xs text-[#6B8193]'>{zh ? '独立业务平台' : 'Independent business platform'}</p>
              </div>
              <span className='border border-[#AFCDE3] bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#155C99]'>{zh ? '业务工具' : 'Operations toolkit'}</span>
            </div>
            <h2 className='mt-7 text-3xl font-medium tracking-[-.04em] sm:text-4xl'>{zh ? '现金贷业务工具平台' : 'Cash Loan Operations Platform'}</h2>
            <p className='mt-4 max-w-2xl text-sm leading-7 text-[#53697B]'>{zh ? '面向现金贷业务团队的独立工具平台。进入业务工作台，查看对应的业务产品与运营能力。' : 'An independent toolkit for cash loan operations teams. Visit the business workspace to explore its products and operational capabilities.'}</p>
            <dl className='mt-8 grid gap-px border-y border-[#C9DCEC] bg-[#C9DCEC] sm:grid-cols-3'>
              {[
                [zh ? '适用团队' : 'Built for', zh ? '现金贷业务与运营' : 'Cash loan operations'],
                [zh ? '平台形态' : 'Platform type', zh ? '独立业务工作台' : 'Independent workspace'],
                [zh ? '访问方式' : 'Access', zh ? '新窗口打开' : 'Opens separately'],
              ].map(([label, value]) => <div key={label} className='bg-[#EAF5FC] py-4 pr-5 sm:px-5 sm:first:pl-0'>
                <dt className='text-[10px] font-semibold uppercase tracking-[.14em] text-[#7A91A3]'>{label}</dt>
                <dd className='mt-2 text-sm font-semibold text-[#173E5D]'>{value}</dd>
              </div>)}
            </dl>
          </div>
          <div className='border-t border-[#C9DCEC] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8'>
            <div className='flex h-full flex-col justify-between border border-[#C9DCEC] bg-white/75 p-6 shadow-[0_12px_30px_rgba(6,43,73,.06)] sm:p-7'>
              <div>
                <p className='text-[10px] font-semibold uppercase tracking-[.16em] text-[#1E73BE]'>{zh ? '外部平台入口' : 'External platform access'}</p>
                <h3 className='mt-4 text-xl font-semibold tracking-[-.025em]'>{zh ? '进入业务工作台' : 'Open the business workspace'}</h3>
                <p className='mt-3 text-sm leading-6 text-[#6B8193]'>{zh ? '访问后将在独立平台中继续，不影响当前风险情报平台。' : 'Continue in the independent platform without leaving this risk intelligence workspace behind.'}</p>
              </div>
              <div className='mt-8'>
                <a href={cashLoanPlatform.href} target='_blank' rel='noopener noreferrer' className='group inline-flex min-h-14 w-full items-center justify-between gap-8 bg-[#062B49] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#155C99]'>{zh ? '访问现金贷业务平台' : 'Visit Cash Loan Platform'}<ArrowUpRight size={18} className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'/></a>
                <p className='mt-4 break-all font-mono text-[11px] text-[#7A91A3]'>business.truenorthdata.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)]'><div><Link href={href('')} className='flex items-center gap-3 font-semibold tracking-[.12em] text-[#062B49]'><img src={siteHref('/brand/truenorth-icon.svg')} alt='TrueNorth' className='h-8 w-8 rounded-md'/><span>TrueNorth</span></Link><p className='mt-5 max-w-xs text-sm leading-6 text-[#6B7F91]'>{zh ? '面向新兴市场的全球风险情报基础设施。' : 'Global risk intelligence infrastructure for emerging markets.'}</p><p className='mt-4 text-xs text-[#7A91A3]'>香港北宸科技有限公司</p></div>{groups.map(group => <div key={group.title}><p className='text-xs font-semibold uppercase tracking-[.14em] text-[#062B49]'>{group.title}</p><div className='mt-4 grid gap-3'>{group.links.map(([label, path]) => <Link key={label} href={href(path)} className='text-sm text-[#6B7F91] hover:text-[#1E73BE]'>{label}</Link>)}</div></div>)}</div><div className='mt-12 flex flex-col gap-3 border-t border-[#D9E7F3] pt-5 text-xs text-[#6B7F91] sm:flex-row sm:items-center sm:justify-between'><span>{zh ? '© 2026 TrueNorth。风险情报基础设施。' : '© 2026 TrueNorth. Risk intelligence infrastructure.'}</span><span>{zh ? 'Demo 环境 · 不查询真实数据' : 'Demo environment · No real data queried'}</span></div>
    </div>
  </footer>
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={'eyebrow ' + (dark ? 'text-[#56A9F2]' : '')}>{children}</p>
}

export function SignalPill({ children, tone = 'teal' }: { children: React.ReactNode; tone?: 'teal' | 'amber' | 'blue' | 'violet' }) {
  const styles = { teal: 'border-[#b9e8dc] bg-[#edf9f5] text-[#155C99]', amber: 'border-[#eed5ac] bg-[#fff8eb] text-[#94601d]', blue: 'border-[#c9dced] bg-[#f1f7fc] text-[#3b6d98]', violet: 'border-[#d9cfee] bg-[#f7f3fd] text-[#6d56a0]' }
  return <span className={'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ' + styles[tone]}>{children}</span>
}
