# SIGNAL — Product Changelog

## V1 → V2

### Product identity

- Reframed SIGNAL from a narrow account-checking concept into a **Global Risk Intelligence Platform**.
- Removed any assumption that WhatsApp, phone lookup, or social-account checking is the brand-level product.
- Added emerging-market fintech and consumer-lending context as the primary commercial frame.

### Information architecture

- Preserved the four technical systems: Identity Intelligence, Fraud Intelligence, Local Data Intelligence, and eKYC Infrastructure.
- Added four marketing capability centers: Identity & KYC, Global Fraud & Risk Intelligence, Global Account Intelligence, and Localized Financial Infrastructure.
- Added Coverage and Consumer Lending as first-class marketing pages.
- Added a localized Dashboard Layout with Overview, Identity Check, and Fraud Check flows for Phase 1.

### Data and claims

- Elevated **Fresh data queried on demand** and `No Cache` as the default product behavior.
- Added explicit Signals language: SIGNAL provides signals; the customer’s risk engine makes decisions.
- Kept `Unknown` separate from `No Match` and `Not Registered`.
- Removed invented risk scores and any loan-approval or rejection language.
- Kept provider routing internal and identifiers masked by default.
- Added the “API access without additional client-side SDK integration” distinction for global fraud intelligence.

### Internationalization

- Simplified Chinese became the default locale.
- English is the secondary locale with route-preserving language switching.
- Added `I18N_SPEC.md` and shared message dictionaries.

### Delivery boundary

- Phase 1 continues to use Mock Data only. No real provider, billing, or auth backend is connected.
- V1 `PROJECT_BRIEF.md` remains preserved as the original baseline; this document and `PRODUCT_POSITIONING_V2.md` govern current product direction where they differ.
