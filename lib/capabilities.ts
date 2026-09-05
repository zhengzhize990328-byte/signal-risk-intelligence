import type { LucideIcon } from 'lucide-react'

export type CapabilityKey = 'identityKyc' | 'fraudRisk' | 'globalAccounts' | 'localInfra'

export type CommercialCapability = {
  no: string
  key: CapabilityKey
  technical: string
  productCodes: string[]
}

/** Shared commercial mapping used by Home and Products. Keep this list locale-neutral. */
export const commercialCapabilities: CommercialCapability[] = [
  { no: '01', key: 'identityKyc', technical: 'Identity Intelligence + eKYC Infrastructure', productCodes: ['KYC', 'OCR', 'Document', 'Face', 'Liveness'] },
  { no: '02', key: 'fraudRisk', technical: 'Fraud Intelligence', productCodes: ['Global Fraud', 'Device Signals', 'Blacklists'] },
  { no: '03', key: 'globalAccounts', technical: 'Identity Intelligence', productCodes: ['WhatsApp', 'Facebook', 'Telegram', 'Zalo'] },
  { no: '04', key: 'localInfra', technical: 'Local Data Intelligence', productCodes: ['India', 'Vietnam', 'Malaysia'] },
]

export const capabilityLabels = {
  zh: ['身份认证与 KYC', '全球反欺诈与风险情报', '全球账号情报', '本地化金融基础设施'],
  en: ['Identity & KYC', 'Global Fraud & Risk Intelligence', 'Global Account Intelligence', 'Localized Financial Infrastructure'],
} as const

export const capabilityBodies = {
  zh: ['覆盖用户身份确认、数字账号识别及完整 KYC 流程，为金融业务提供可靠的身份信号。', '通过全球报告、设备信号与黑名单上下文，在无需额外客户端 SDK 的情况下接入反欺诈能力。', '在统一平台下组合 WhatsApp、Facebook、Telegram 与 Zalo 的注册和详情信号。', '把印度、越南、马来西亚等本地金融与账号通道纳入统一 API。'],
  en: ['Verify customer identity across digital account, identity and composable eKYC signals.', 'Global reports, device signals and blacklist context delivered on demand through API, without an additional client SDK.', 'Registration and details intelligence across WhatsApp, Facebook, Telegram and Zalo beneath one platform.', 'India, Vietnam, Malaysia and other local channels that close market-specific gaps.'],
} as const

export const capabilityView = (locale: 'zh' | 'en') => commercialCapabilities.map((capability, index) => ({
  ...capability,
  label: capabilityLabels[locale][index],
  body: capabilityBodies[locale][index],
}))

// Kept here so visual components can associate an icon without duplicating the mapping.
export type CapabilityWithIcon = CommercialCapability & { icon: LucideIcon }
