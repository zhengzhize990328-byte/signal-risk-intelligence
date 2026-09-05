const Link = ({ href, ...props }: any) => <a href={href} {...props} />
import { ArrowLeft, ArrowUpRight, Clock3, Network } from 'lucide-react'
import { MarketingFooter, MarketingHeader, SectionLabel } from '@/components/marketing'

type Locale = 'zh' | 'en'
type StatusKind = 'developers' | 'company'

export default function MarketingStatusPage({ locale, kind }: { locale: Locale; kind: StatusKind }) {
  const zh = locale === 'zh'
  const content = kind === 'developers'
    ? (zh ? { eyebrow: '开发者基础设施', title: '开发者能力正在开放。', body: 'API 产品目录、结构化信号与集成指南正在按当前产品能力逐步开放。', status: '建设中' } : { eyebrow: 'Developer infrastructure', title: 'Developer access is being composed.', body: 'API catalog, structured signals and integration guidance are opening in line with current product capability.', status: 'In progress' })
    : (zh ? { eyebrow: '关于 SIGNAL', title: '为复杂市场构建风险情报基础设施。', body: 'SIGNAL 为金融与风控团队提供身份、反欺诈、账号情报、本地数据与 eKYC 能力。', status: '持续建设中' } : { eyebrow: 'About SIGNAL', title: 'Risk intelligence infrastructure for complex markets.', body: 'SIGNAL gives finance and risk teams access to identity, fraud, account intelligence, local data and eKYC capabilities.', status: 'Building' })
  const href = (path: string) => `/${locale}${path}`
  return <main className='min-h-screen bg-[#f7faf9] text-[#10252d]'>
    <div className='bg-[#10252d] text-white'>
      <MarketingHeader dark locale={locale} />
      <div className='mx-auto max-w-[1440px] px-6 pb-24 pt-16 lg:px-12 lg:pb-32 lg:pt-24'>
        <div className='max-w-3xl'>
          <div className='grid h-16 w-16 place-items-center rounded-full border border-[#8ce1cc]/30 bg-[#8ce1cc]/10 text-[#8ce1cc]'><Clock3 size={26}/></div>
          <SectionLabel dark>{content.eyebrow}</SectionLabel>
          <h1 className='mt-5 text-5xl font-medium leading-[1.02] tracking-[-.05em] sm:text-7xl'>{content.title}</h1>
          <p className='mt-7 max-w-xl text-lg leading-8 text-white/60'>{content.body}</p>
          <p className='mt-8 inline-flex items-center gap-2 border border-[#8ce1cc]/40 px-3 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[#d9fff6]'>{content.status}</p>
          <div className='mt-10 flex flex-wrap gap-4'>
            <Link href={href('/')} className='inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white'><ArrowLeft size={15}/>{zh ? '返回首页' : 'Back home'}</Link>
            <Link href={href(kind === 'developers' ? '/products' : '/contact-sales')} className='inline-flex items-center gap-2 border border-[#8ce1cc]/50 px-4 py-3 text-sm font-semibold text-[#d9fff6] hover:bg-[#8ce1cc] hover:text-[#10252d]'>{zh ? (kind === 'developers' ? '查看产品目录' : '联系销售') : (kind === 'developers' ? 'Explore catalog' : 'Talk to sales')}<ArrowUpRight size={15}/></Link>
          </div>
        </div>
      </div>
    </div>
    <MarketingFooter locale={locale} />
  </main>
}
