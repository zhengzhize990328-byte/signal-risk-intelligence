import { catalog, type CatalogProduct } from '@/lib/catalog'

export type IdentityResult = 'registered' | 'not_registered' | 'unknown' | 'not_applicable' | 'error'
export type QueryStatus = 'idle' | 'validating' | 'querying' | 'completed' | 'unknown' | 'error'
export type SignalResult = 'match' | 'no_match' | 'unknown' | 'available' | 'unavailable' | 'error'
export type SignalValue = boolean | string | number | null
export type IdentifierType = 'phone' | 'email' | 'id_number' | 'device'
export type Signal = { key: string; label: string; value: SignalValue; result: SignalResult }
export type QueryMetadata = { product_code: string; market: string; query_mode: 'on_demand'; queried_at: string; latency: string; request_id: string; demo: true }
export type IdentityRequest = { service: string; product_code: string; identifier_type: 'phone' | 'email'; identifier: string; market: string; scenario: 'registered' | 'not_registered' | 'unknown' | 'error' }
export type IdentityResponse = { request_status: Exclude<QueryStatus, 'idle' | 'validating' | 'querying'>; product_result: IdentityResult; signals: Signal[]; metadata: QueryMetadata; raw_response: Record<string, unknown> }
export type FraudProductResult = { product_code: string; label: string; status: 'completed' | 'unknown' | 'error'; result: 'match' | 'no_match' | 'unknown' | 'error'; signals: Signal[]; metadata: QueryMetadata; raw_response: Record<string, unknown>; error?: string }
export type FraudResponse = { request_status: 'completed' | 'partial' | 'unknown' | 'error'; request_id: string; queried_at: string; demo: true; products: FraudProductResult[] }

const identityDefinition: Record<string, { service: string; operation: string; identifierTypes: Array<'phone' | 'email'> }> = {
  whatsapp_registration: { service: 'WhatsApp', operation: 'Registration Check', identifierTypes: ['phone'] },
  whatsapp_details: { service: 'WhatsApp', operation: 'Account Details', identifierTypes: ['phone'] },
  facebook_phone_registration: { service: 'Facebook', operation: 'Phone Registration', identifierTypes: ['phone'] },
  facebook_email_registration: { service: 'Facebook', operation: 'Email Registration', identifierTypes: ['email'] },
  telegram_registration: { service: 'Telegram', operation: 'Registration', identifierTypes: ['phone'] },
  telegram_details: { service: 'Telegram', operation: 'Account Details', identifierTypes: ['phone'] },
  zalo_registration: { service: 'Zalo', operation: 'Registration', identifierTypes: ['phone'] },
}
const inputTypeFallbacks: Record<string, IdentifierType[]> = {
  whatsapp_registration: ['phone'], whatsapp_details: ['phone'], facebook_phone_registration: ['phone'], facebook_email_registration: ['email'], telegram_registration: ['phone'], telegram_details: ['phone'], zalo_registration: ['phone'],
  global_fraud_report: ['phone', 'email', 'id_number'], global_blacklist: ['phone', 'email', 'id_number'], multi_country_blacklist: ['phone', 'id_number'], device_fraud_signals: ['phone', 'email', 'id_number'],
  india_fintech_intelligence: ['phone', 'id_number'], vietnam_zalo_official: ['phone'], malaysia_risk_data: ['phone', 'id_number'],
}
const productFor = (code: string) => catalog.find((item) => item.product_code === code)
const inputTypesFor = (product?: CatalogProduct) => product?.input_types ?? inputTypeFallbacks[product?.product_code ?? ''] ?? ['phone']
const supportedMarket = (product: CatalogProduct | undefined, market: string) => Boolean(product && (product.supported_countries.includes('Global') || product.supported_countries.includes(market)))

export const identityCatalog: Record<string, { service: string; operation: string; product_code: string; identifierTypes: Array<'phone' | 'email'>; markets: string[]; catalog: CatalogProduct | undefined }> = Object.fromEntries(Object.entries(identityDefinition).map(([code, definition]) => { const product = productFor(code); return [code, { ...definition, product_code: code, identifierTypes: inputTypesFor(product).filter((type): type is 'phone' | 'email' => type === 'phone' || type === 'email'), markets: product?.supported_countries ?? ['Global'], catalog: product }] }))
export const identityOptions = Object.values(identityCatalog)
export const fraudProducts = catalog.filter((product) => product.status === 'active' && (product.category === 'Fraud Intelligence' || product.category === 'Local Data Intelligence')).map((product) => ({ product_code: product.product_code, label: product.name, input_types: inputTypesFor(product), supported_countries: product.supported_countries }))
export function fraudProductCompatible(productCode: string, market: string, identifierType: string) { const product = productFor(productCode); return Boolean(product && product.status === 'active' && product.query_mode === 'on_demand' && supportedMarket(product, market) && inputTypesFor(product).includes(identifierType.toLowerCase() as IdentifierType)) }
export function productLabel(productCode: string) { return productFor(productCode)?.name ?? productCode }
