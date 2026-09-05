import { catalog } from '@/lib/catalog'
import type { FraudResponse, IdentityRequest, IdentityResponse, QueryMetadata, Signal } from '@/lib/dashboard-models'
import { fraudProductCompatible, productLabel } from '@/lib/dashboard-models'

const stamp = '2026-09-04T09:24:00.000Z'
const catalogSignals = (code: string) => catalog.find((item) => item.product_code === code)?.available_signals ?? []
const metadata = (code: string, market: string, latency: string, requestId: string): QueryMetadata => ({ product_code: code, market, query_mode: 'on_demand', queried_at: stamp, latency, request_id: requestId, demo: true })

function identitySignals(code: string, result: IdentityResponse['product_result']): Signal[] {
  return catalogSignals(code).map((key, index) => ({
    key, label: key,
    value: result === 'error' || result === 'unknown' ? null : key === 'account_registered' || key === 'profile_available' ? result === 'registered' : key === 'business_account' ? false : result === 'registered',
    result: result === 'error' ? 'error' : result === 'unknown' ? 'unknown' : index === 0 && result === 'not_registered' ? 'no_match' : 'available',
  }))
}
export async function mockIdentityService(request: IdentityRequest): Promise<IdentityResponse> {
  const valid = request.identifier.trim().length >= 4 && (request.identifier_type === 'email' ? request.identifier.includes('@') : true)
  await new Promise((resolve) => setTimeout(resolve, 240))
  if (!valid) throw new Error('invalid_identifier')
  await new Promise((resolve) => setTimeout(resolve, 520))
  const result = request.scenario
  const status = result === 'unknown' ? 'unknown' : result === 'error' ? 'error' : 'completed'
  const requestId = 'demo_id_' + request.product_code.slice(0, 8) + '_' + request.scenario
  return { request_status: status, product_result: result, signals: identitySignals(request.product_code, result), metadata: metadata(request.product_code, request.market, result === 'error' ? '—' : '0.84s', requestId), raw_response: { demo: true, result, product_code: request.product_code, signals: catalogSignals(request.product_code), queried_at: stamp } }
}
export async function mockFraudService(args: { market: string; identifierType: string; identifier: string; products: string[]; scenario: 'match' | 'no_match' | 'unknown' | 'partial' | 'error' }): Promise<FraudResponse> {
  const valid = args.identifier.trim().length >= 4 && (args.identifierType !== 'Email' || args.identifier.includes('@'))
  await new Promise((resolve) => setTimeout(resolve, 240))
  if (!valid) throw new Error('invalid_identifier')
  await new Promise((resolve) => setTimeout(resolve, 620))
  const requestId = 'demo_fr_' + args.scenario + '_' + args.products.length
  const normalizedType = args.identifierType === 'ID Number' ? 'id_number' : args.identifierType.toLowerCase()
  const compatibleProducts = args.products.filter((code) => fraudProductCompatible(code, args.market, normalizedType))
  const products = compatibleProducts.map((code, index) => {
    const fail = args.scenario === 'error' || (args.scenario === 'partial' && index === compatibleProducts.length - 1)
    const unknown = args.scenario === 'unknown'
    const result = fail ? 'error' : unknown ? 'unknown' : args.scenario === 'partial' ? 'match' : args.scenario
    const signals = catalogSignals(code).map((key, signalIndex) => ({ key, label: key, value: result === 'error' || result === 'unknown' ? null : result === 'match', result: result === 'error' ? 'error' : result === 'unknown' ? 'unknown' : signalIndex === 0 ? result : 'available' }))
    return { product_code: code, label: productLabel(code), status: result === 'error' ? 'error' : result === 'unknown' ? 'unknown' : 'completed', result, signals, metadata: metadata(code, args.market, result === 'error' ? '—' : (0.72 + index * 0.11).toFixed(2) + 's', requestId + '_' + (index + 1)), raw_response: { demo: true, product_code: code, result, signals: catalogSignals(code), queried_at: stamp }, ...(result === 'error' ? { error: 'Demo provider response unavailable' } : {}) }
  })
  const status = args.scenario === 'partial' ? 'partial' : args.scenario === 'unknown' ? 'unknown' : args.scenario === 'error' ? 'error' : 'completed'
  return { request_status: status, request_id: requestId, queried_at: stamp, demo: true, products }
}
export { fraudProductCompatible }
