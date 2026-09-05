# SIGNAL
# Global Risk Intelligence Platform
## FINAL PROJECT BRIEF

Version: 1.0  
Project type: B2B risk intelligence SaaS  
Primary market: Emerging markets  
Status: Phase 1 / Mock environment

## 1. Product positioning

SIGNAL provides on-demand identity verification, fraud intelligence, localized risk data and eKYC infrastructure for Fintech, Consumer Lending, Cash Loan, Payments, Digital Banking, Fraud Prevention, KYC Providers, Trust & Safety and risk teams operating in emerging markets.

Primary message:

> Risk intelligence built for emerging markets.

Supporting message:

> Identity verification, fraud intelligence, localized risk data and eKYC capabilities — built to help financial businesses make safer decisions.

Core model:

```text
DATA SOURCES
      ↓
PRODUCTS
      ↓
SIGNALS
      ↓
APPLICANT INTELLIGENCE
      ↓
CUSTOMER RISK ENGINE
```

SIGNAL provides signals. The customer owns the final risk decision. Never imply that SIGNAL approves, rejects or assigns a final risk score to an applicant.

## 2. Real product capabilities

The product catalog is based on the currently confirmed business capabilities:

- India fintech licensed/local data capability with a stable local channel. Use “Licensed Data Channel” only when evidence supports the claim; otherwise use “Specialized Local Data Channel”.
- WhatsApp Intelligence: registration detection and details query, encrypted phone requests, dedicated/VIP channels, rich fields and global coverage.
- Global Fraud Intelligence: global fraud reports and distinctive SDK/device signals, callable through API without requiring the customer to integrate a client-side SDK.
- Multi-country Blacklist Intelligence: proprietary/local blacklist capability, including Malaysia-focused data.
- Vietnam Zalo official channel: registration-state recognition, including enhanced recognition for privacy-sensitive scenarios where authorized.
- eKYC Infrastructure: composable KYC flow including OCR, document verification, face match, liveness, identity matching and government database checks where available and authorized.
- Facebook phone/email registration detection.
- Telegram registration and details.

The platform differentiator is **on-demand data retrieval / fresh data queried on demand**. Do not present stale platform-side cache as the primary product value.

## 3. Product systems and catalog

The four top-level systems are:

1. Identity Intelligence
2. Fraud Intelligence
3. Local Data Intelligence
4. eKYC Infrastructure

WhatsApp, Facebook, Telegram and Zalo are products under Identity Intelligence, not the SIGNAL brand positioning.

Marketing, Dashboard, API, Billing and Admin must share one Product Catalog and one stable `product_code` per capability. Product records should expose status, query mode, supported countries and available signals.

## 4. Business and data principles

- We provide the signals. Your risk engine makes the decision.
- `Unknown` must remain distinct from `No Match` and `Not Registered`.
- Never invent Low / Medium / High risk scores or a composite applicant score.
- Provider names are internal implementation details and are not exposed to customers.
- Sensitive identifiers are encrypted in transit and masked by default in workspace views.
- Marketing demos never call real data.
- Phase 1 uses Mock Data only: no real provider, billing, authentication backend or production credentials.
- Public claims such as official, licensed, exclusive or non-cached must be used only when supported by evidence.

## 5. Phase 1 scope

### Marketing

- Home
- Products Overview
- Consumer Lending solution
- Coverage
- Contact Sales
- Coming Soon
- 404

### Dashboard

- Overview
- Identity Check
- Fraud Check
- History
- API Keys

### Access

- Login
- Signup / Request access

All listed surfaces are present in English and the core marketing/access surfaces are also available under `/zh`.

## 6. Design direction

Reference the information structure and enterprise risk-technology confidence of TrustDecision, with the visual precision of Persona and Stripe, without copying any site.

Marketing uses a dark deep-blue/green hero, mineral light surfaces, restrained borders, low-radius cards, teal signal accents and a Signal Graph / Intelligence Graph showing Applicant → Identity / Fraud / Local Data / eKYC → Customer Risk Engine.

Dashboard uses a light, professional, medium/high-density Risk Intelligence Console layout. Avoid generic AI SaaS, phone-number checker, WhatsApp checker and ordinary Admin Template aesthetics.

## 7. Preferred implementation

Next.js + TypeScript + Tailwind CSS + shadcn/ui + Lucide. Establish design tokens, typography, spacing, radius, color, signal graph language, catalog models, country/coverage models and mock service layer before connecting real services.

## 8. Current implementation boundary

The current SIGNAL workspace is intentionally local and mock-only. Real provider integrations, production authentication, real billing, final pricing, complete coverage evidence and definitive provider response fields are deferred to later phases.
