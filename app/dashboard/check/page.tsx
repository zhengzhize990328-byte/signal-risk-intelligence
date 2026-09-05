'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Info, ShieldCheck } from 'lucide-react'
import { Badge, Button, LoadingState, SelectBox, ServiceMark } from '@/components/ui'
import { maskIdentifier, services } from '@/lib/mock-data'

export default function CheckPage() {
  const [service, setService] = useState('WhatsApp')
  const [kind, setKind] = useState('Phone number')
  const [value, setValue] = useState('+1 415 555 0198')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(false)
  const current = services.find((s) => s.name === service)!

  function run() {
    setLoading(true)
    setResult(false)
    setTimeout(() => { setLoading(false); setResult(true) }, 900)
  }

  return <div className="max-w-5xl">
    <p className="text-sm text-[var(--muted)]">Workspace / Single check</p>
    <h1 className="mt-1 text-3xl font-semibold tracking-[-.03em]">Run an identity check</h1>
    <p className="mt-2 text-[var(--muted)]">Query a single identifier across a supported network.</p><div className="mt-5 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-[#e7f6ef] px-3 py-1.5 font-semibold text-[#0e746c]">Live Query</span><span className="rounded-full bg-white px-3 py-1.5 text-[var(--muted)]">No Cache</span><span className="rounded-full bg-white px-3 py-1.5 text-[var(--muted)]">Fresh Available Signals</span></div>
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.78fr]">
      <section className="rounded-xl border border-[var(--line)] bg-white p-6">
        <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5"><ServiceMark mark={current.mark} tone={current.tone}/><div><h2 className="font-semibold">{service} verification</h2><p className="text-sm text-[var(--muted)]">Registration and account signals</p></div></div>
        <div className="mt-7 space-y-5">
          <label className="block text-sm font-semibold">Service<SelectBox value={service} onChange={(v) => { setService(v); setResult(false) }}>{services.map((s) => <option key={s.name}>{s.name}</option>)}</SelectBox></label>
          <label className="block text-sm font-semibold">Identifier type<SelectBox value={kind} onChange={setKind}><option>Phone number</option><option>Email address</option></SelectBox></label>
          <label className="block text-sm font-semibold">{kind}<input value={value} onChange={(e) => setValue(e.target.value)} className="mt-2 w-full rounded-lg border border-[var(--line)] px-3.5 py-3 font-mono text-sm outline-none focus:border-teal"/></label>
          <div className="flex items-start gap-2 rounded-lg bg-[#f5f8f7] p-3 text-xs leading-5 text-[var(--muted)]"><Info size={15} className="mt-0.5 shrink-0 text-teal"/>Use only identifiers you have a lawful basis to process. SIGNAL is designed for responsible verification.</div>
          <Button onClick={run} disabled={loading || !value} className="w-full">{loading ? <LoadingState/> : <>Run check <ArrowRight size={16}/></>}</Button>
        </div>
      </section>
      <section className="rounded-xl border border-[var(--line)] bg-ink p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#89d1bf]">Signal response</p>
        {!loading && !result && <div className="mt-20 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/5"><ShieldCheck size={24} className="text-white/40"/></div><p className="mt-5 font-medium">Your result will appear here</p><p className="mt-2 text-sm leading-6 text-white/50">Run a check to receive a clear, structured identity signal.</p></div>}
        {loading && <div className="mt-20 flex justify-center"><LoadingState/></div>}
        {result && <div className="mt-10"><div className="flex items-center gap-3"><CheckCircle2 size={27} className="text-[#9ce0cb]"/><div><p className="text-xl font-semibold">Registered</p><p className="text-sm text-white/50">Account registration signal returned.</p></div></div><div className="mt-8 space-y-3 border-t border-white/10 pt-5 text-sm"><div className="flex justify-between"><span className="text-white/50">Product</span><span className="font-mono text-xs">whatsapp_registration</span></div><div className="flex justify-between"><span className="text-white/50">Identifier</span><span className="font-mono text-xs">{maskIdentifier(value)}</span></div><div className="flex justify-between"><span className="text-white/50">Market</span><span>Nigeria</span></div><div className="flex justify-between"><span className="text-white/50">Queried at</span><span>2026-09-02 01:20:33</span></div><div className="flex justify-between"><span className="text-white/50">Latency</span><span>1.28s</span></div></div><Badge className="mt-8 bg-white/10 text-[#bfeee0]">Verified signal · no risk score</Badge></div>}
      </section>
    </div>
  </div>
}
