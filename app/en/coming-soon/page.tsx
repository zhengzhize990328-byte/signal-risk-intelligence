const Link = ({ href, ...props }: any) => <a href={href} {...props} />
import { ArrowLeft, ArrowUpRight, Clock3, Network } from 'lucide-react'

export default function EnglishComingSoon() {
  return (
    <main className='grid min-h-screen place-items-center bg-[#10252d] px-6 text-white'>
      <div className='w-full max-w-xl text-center'>
        <Link href='/en' className='mx-auto flex w-fit items-center gap-3 text-sm font-semibold tracking-[.22em]'>
          <span className='grid h-8 w-8 place-items-center border border-[#8ce1cc]/60 text-[#8ce1cc]'><Network size={15}/></span>SIGNAL
        </Link>
        <div className='mx-auto mt-14 grid h-16 w-16 place-items-center rounded-full border border-[#8ce1cc]/30 bg-[#8ce1cc]/10 text-[#8ce1cc]'><Clock3 size={26}/></div>
        <p className='mt-8 text-xs font-bold uppercase tracking-[.2em] text-[#8ce1cc]'>Coming soon</p>
        <h1 className='mt-4 text-5xl font-medium tracking-[-.05em]'>This capability layer<br/><span className='text-[#8ce1cc]'>is being composed.</span></h1>
        <p className='mx-auto mt-6 max-w-md text-sm leading-7 text-white/55'>The Phase 1 product catalog and workspace are open to explore. This page will open further as the underlying workflow becomes available.</p>
        <div className='mt-9 flex justify-center gap-4'>
          <Link href='/en' className='inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white'><ArrowLeft size={15}/> Back home</Link>
          <Link href='/en/products' className='inline-flex items-center gap-2 border border-[#8ce1cc]/50 px-4 py-3 text-sm font-semibold text-[#d9fff6] hover:bg-[#8ce1cc] hover:text-[#10252d]'>View catalog <ArrowUpRight size={15}/></Link>
        </div>
      </div>
    </main>
  )
}
