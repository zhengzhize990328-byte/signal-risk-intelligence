export type ProductStatus = 'active' | 'degraded' | 'maintenance' | 'disabled' | 'coming_soon'
export type ProductCategory = 'Identity Intelligence' | 'Fraud Intelligence' | 'Local Data Intelligence' | 'eKYC Infrastructure'

export type CatalogProduct = {
  product_code: string
  category: ProductCategory
  name: string
  description: string
  supported_countries: string[]
  input_types?: Array<'phone' | 'email' | 'id_number' | 'device'>
  available_signals: string[]
  supports_details?: boolean
  query_mode: 'on_demand' | 'workflow'
  status: ProductStatus
}

/** Single source of truth for customer-facing product availability. */
export const productAvailability = {
  whatsapp_registration: 'active',
  whatsapp_details: 'active',
  facebook_phone_registration: 'active',
  facebook_email_registration: 'active',
  telegram_registration: 'active',
  telegram_details: 'active',
  zalo_registration: 'active',
  global_fraud_report: 'active',
  global_blacklist: 'active',
  multi_country_blacklist: 'active',
  device_fraud_signals: 'active',
  india_fintech_intelligence: 'active',
  vietnam_zalo_official: 'active',
  malaysia_risk_data: 'active',
  document_ocr: 'active',
  document_verification: 'active',
  face_match: 'active',
  liveness: 'active',
  government_database: 'coming_soon',
  identity_matching: 'active',
} as const satisfies Record<string, ProductStatus>

export const catalog: CatalogProduct[] = [
  { product_code: 'whatsapp_registration', category: 'Identity Intelligence', name: 'WhatsApp Registration', description: 'Registration presence and identity signals through a dedicated encrypted route.', supported_countries: ['Global'], available_signals: ['account_registered', 'registration_status'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'whatsapp_details', category: 'Identity Intelligence', name: 'WhatsApp Details', description: 'Rich account details when available from the queried channel.', supported_countries: ['Global'], available_signals: ['profile_available', 'business_account'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'facebook_phone_registration', category: 'Identity Intelligence', name: 'Facebook Phone Registration', description: 'Phone-based Facebook registration signal for identity enrichment.', supported_countries: ['Global'], available_signals: ['account_registered', 'identity_presence'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'facebook_email_registration', category: 'Identity Intelligence', name: 'Facebook Email Registration', description: 'Email-based Facebook registration signal for identity enrichment.', supported_countries: ['Global'], available_signals: ['account_registered', 'identity_presence'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'telegram_registration', category: 'Identity Intelligence', name: 'Telegram Registration', description: 'Telegram registration presence for phone-based identity enrichment.', supported_countries: ['Global'], available_signals: ['account_registered', 'identity_presence'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'telegram_details', category: 'Identity Intelligence', name: 'Telegram Details', description: 'Available Telegram account details from an on-demand query.', supported_countries: ['Global'], available_signals: ['profile_available', 'identity_presence'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'zalo_registration', category: 'Identity Intelligence', name: 'Official Zalo Intelligence', description: 'Vietnam-local registration signals through an official/direct channel where authorized.', supported_countries: ['Vietnam'], available_signals: ['account_registered', 'official_account_status'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'global_fraud_report', category: 'Fraud Intelligence', name: 'Global Fraud Intelligence', description: 'Global fraud and device-related signals through API without an additional client SDK.', supported_countries: ['Global'], available_signals: ['fraud_signal', 'device_risk', 'historical_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'global_blacklist', category: 'Fraud Intelligence', name: 'Global Blacklist Intelligence', description: 'Global blacklist matching with a structured, explainable signal response.', supported_countries: ['Global'], available_signals: ['blacklist_match', 'historical_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'multi_country_blacklist', category: 'Fraud Intelligence', name: 'Global & Local Blacklist Intelligence', description: 'Multi-country blacklist matching with localized context.', supported_countries: ['Global', 'Malaysia'], available_signals: ['blacklist_match', 'local_blacklist'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'device_fraud_signals', category: 'Fraud Intelligence', name: 'Device Fraud Signals', description: 'Device and behavioral signals available through API without a client-side SDK.', supported_countries: ['Global'], available_signals: ['device_risk', 'fraud_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'india_fintech_intelligence', category: 'Local Data Intelligence', name: 'India Fintech Intelligence', description: 'Specialized local fintech and financial intelligence for India.', supported_countries: ['India'], available_signals: ['fintech_license', 'regional_risk_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'vietnam_zalo_official', category: 'Local Data Intelligence', name: 'Vietnam Zalo Official Channel', description: 'Vietnam-local Zalo registration intelligence through an official/direct channel where authorized.', supported_countries: ['Vietnam'], available_signals: ['official_account_status', 'regional_risk_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'malaysia_risk_data', category: 'Local Data Intelligence', name: 'Malaysia Proprietary Risk Data', description: 'Localized proprietary risk signals for the Malaysian market.', supported_countries: ['Malaysia'], available_signals: ['local_blacklist', 'regional_risk_signal'], query_mode: 'on_demand', status: 'active' },
  { product_code: 'document_ocr', category: 'eKYC Infrastructure', name: 'Document OCR', description: 'Extract structured document fields as part of a composable verification workflow.', supported_countries: ['Global'], available_signals: ['ocr_completed'], query_mode: 'workflow', status: productAvailability.document_ocr },
  { product_code: 'document_verification', category: 'eKYC Infrastructure', name: 'Document Verification', description: 'Composable document, OCR and identity matching workflow.', supported_countries: ['Global'], available_signals: ['document_verified', 'ocr_completed', 'identity_matching'], query_mode: 'workflow', status: productAvailability.document_verification },
  { product_code: 'face_match', category: 'eKYC Infrastructure', name: 'Face Match', description: 'Compare a selfie to an identity document within a configurable workflow.', supported_countries: ['Global'], available_signals: ['face_matched'], query_mode: 'workflow', status: productAvailability.face_match },
  { product_code: 'liveness', category: 'eKYC Infrastructure', name: 'Liveness', description: 'Add liveness signals to identity verification journeys.', supported_countries: ['Global'], available_signals: ['liveness_passed'], query_mode: 'workflow', status: productAvailability.liveness },
  { product_code: 'government_database', category: 'eKYC Infrastructure', name: 'Government Database Verification', description: 'Country-level government data verification where available and authorized.', supported_countries: ['Selected markets'], available_signals: ['government_verified'], query_mode: 'workflow', status: productAvailability.government_database },
  { product_code: 'identity_matching', category: 'eKYC Infrastructure', name: 'Identity Matching', description: 'Match identity attributes across a composed verification flow.', supported_countries: ['Global'], available_signals: ['identity_matching'], query_mode: 'workflow', status: productAvailability.identity_matching },
]

export const categories = [
  { name: 'Identity Intelligence', eyebrow: '01', body: 'Verify real digital identity signals across messaging and social platforms.', accent: 'teal', products: ['WhatsApp', 'Facebook', 'Telegram', 'Zalo'] },
  { name: 'Fraud Intelligence', eyebrow: '02', body: 'Detect fraud beyond traditional databases with global, device and blacklist signals.', accent: 'amber', products: ['Global Fraud', 'Blacklists', 'Device Signals'] },
  { name: 'Local Data Intelligence', eyebrow: '03', body: 'Go deeper in markets where generic global providers have limited coverage.', accent: 'blue', products: ['India', 'Vietnam', 'Malaysia', 'Regional Data'] },
  { name: 'eKYC Infrastructure', eyebrow: '04', body: 'Build flexible verification journeys from document to official data.', accent: 'violet', products: ['OCR', 'Document', 'Face', 'Liveness'] },
]
