export type Locale = 'zh' | 'en'

export const consumerLendingLifecycle = [
  { no: '01', zh: ['用户获取', '在获客环节沉淀来源、授权与基础申请上下文。'], en: ['Acquisition', 'Connect acquisition context and consent before the first query.'] },
  { no: '02', zh: ['注册', '确认申请人在支持网络中的账号与身份存在性。'], en: ['Registration', 'Confirm identity presence across supported account networks.'] },
  { no: '03', zh: ['身份与账号情报', '在查询时补充可获得的账号详情与数字身份信号。'], en: ['Identity & account intelligence', 'Enrich the applicant with details available at query time.'] },
  { no: '04', zh: ['反欺诈筛查', '调用全球报告、设备信号与黑名单上下文，形成结构化证据。'], en: ['Fraud screening', 'Retrieve global reports, device and blacklist signals.'] },
  { no: '05', zh: ['eKYC', '按市场与业务规则组合证件、OCR、人脸、活体及官方核验。'], en: ['eKYC', 'Compose document, face, liveness and official checks where enabled.'] },
  { no: '06', zh: ['本地数据增强', '引入印度、越南、马来西亚等市场的本地金融与账号上下文。'], en: ['Local data enrichment', 'Add India, Vietnam, Malaysia or other market-specific context.'] },
  { no: '07', zh: ['风险决策', '由你的策略引擎结合偿付能力、规则与人工审核完成最终判断。'], en: ['Risk decision', 'Your policy engine combines signals with affordability and review.'] },
  { no: '08', zh: ['贷后监控', '随着组合风险变化，持续按需查询最新可获得信号。'], en: ['Post-loan monitoring', 'Re-query fresh signals as portfolio risk changes.'] },
] as const
