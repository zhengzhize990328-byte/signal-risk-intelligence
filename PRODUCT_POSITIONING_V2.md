# SIGNAL — Product Positioning V2

Version: 2.0  
Status: Current product and marketing baseline

## Positioning

SIGNAL is a Global Risk Intelligence Platform for emerging-market fintech, consumer lending, cash loan, digital banking, payments, fraud prevention, KYC providers, e-commerce, trust & safety, and risk teams.

**Risk intelligence built for emerging markets.**

SIGNAL provides fresh, on-demand risk signals. The customer’s own risk engine makes the final decision.

> We provide the signals. Your risk engine makes the decision.

## Product architecture

```text
DATA SOURCES → PRODUCTS → SIGNALS → APPLICANT INTELLIGENCE → CUSTOMER RISK ENGINE
```

The platform does not present itself as a WhatsApp checker, phone lookup tool, social account checker, API marketplace, AI SaaS template, or generic admin dashboard. WhatsApp, Facebook, Telegram, and Zalo are specific products within the broader Identity Intelligence system.

## Four technical product systems

These stable categories are shared by the Product Catalog, `product_code`, Signals, Dashboard, API, Billing, Provider Routing, and Admin layers:

1. **Identity Intelligence** — digital account and identity signals, including WhatsApp, Facebook, Telegram, Zalo, and phone identity.
2. **Fraud Intelligence** — global fraud reports, device and fraud signals, and multi-country blacklist intelligence.
3. **Local Data Intelligence** — specialized local financial and market data, including India and Malaysia capabilities.
4. **eKYC Infrastructure** — configurable KYC workflows, OCR, document, face, liveness, government verification, phone verification, and identity matching.

## Four commercial capability centers

Marketing uses capability language while preserving the technical catalog underneath:

- **Identity & KYC** — verify customer identity across digital account, identity, and KYC signals.
- **Global Fraud & Risk Intelligence** — access device, fraud, and blacklist intelligence through API, including capabilities derived from SDK data without requiring the customer to integrate an additional client-side SDK.
- **Global Account Intelligence** — global account registration and details signals across supported digital platforms.
- **Localized Financial Infrastructure** — stable local channels and market-specific financial intelligence for emerging markets.

## Current capability map

- **India Fintech Intelligence** — specialized local financial channel, stable local channel, and local fintech intelligence. Avoid an “official licensed provider” claim unless evidence is confirmed.
- **WhatsApp Intelligence** — encrypted registration and details queries with broad geographic coverage and rich account signals.
- **Global Fraud Intelligence** — global fraud report, device/fraud signals, and API access to selected SDK-derived intelligence without additional client-side SDK integration.
- **Global & Local Blacklist Intelligence** — multi-country own/localized blacklist capabilities, with Malaysia-specific data strengths.
- **Official Zalo Intelligence** — Vietnamese registration-status intelligence, including enhanced recognition for privacy registration scenarios, when the official channel claim is confirmed.
- **KYC Infrastructure** — self-developed, API-first, flexible country-level KYC orchestration with clearly marked Coming Soon capabilities where not yet live.
- **Facebook Intelligence** — phone-number and email registration detection.
- **Telegram Intelligence** — registration detection and account details.

## Data and trust principles

- **Fresh data queried on demand** is the default positioning. Do not imply dependence on stale cache.
- The UI may expose `Live Query`, `No Cache`, and `Signals Only` as metadata.
- `Unknown` is a distinct outcome and never means `No Match` or `Not Registered`.
- Do not invent Low / Medium / High risk scores, loan approval, loan rejection, or credit decisions.
- Provider names and routing details remain internal.
- Sensitive identifiers are masked by default.
- Marketing demos use Mock Data only and never call real providers.

## V2 information architecture

Marketing: Home, Products, Consumer Lending, Coverage, Contact Sales, Login.

Dashboard: Overview, Identity Check, Fraud Check, History, API Keys.

Phase 1 remains focused on the coherent slice above; later Applicant Intelligence, billing, and admin capabilities extend the same catalog and signal model.
