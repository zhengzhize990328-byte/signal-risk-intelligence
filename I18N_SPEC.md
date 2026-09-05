# SIGNAL — Internationalization Specification

Version: 2.0
Default locale: `zh-CN` (Simplified Chinese)
Secondary locale: `en` (English)

## Locale behavior

- `/` and `/zh` are the Simplified Chinese marketing entry points.
- `/en` is the English marketing entry point.
- `/dashboard` and `/zh/dashboard` are Chinese dashboard entry points.
- `/en/dashboard` is the English dashboard entry point.
- Language switching preserves the current page family whenever a localized route exists.
- Missing localized pages fall back to the nearest stable route, never to a blank page.

## Translation rules

- Chinese is concise, professional, and business-oriented; avoid literal machine translation.
- Keep product codes, API field names, status values, and signal names stable across locales.
- Keep the core promise consistent: “我们提供风险信号，最终风险决策由客户自己的风控系统完成。” / “We provide the signals. Your risk engine makes the decision.”
- Translate capability descriptions, empty states, validation feedback, and action labels.
- Do not translate brand names, `Live Query`, `No Cache`, `Signals Only`, or `product_code` values unless a page explicitly provides a localized explanatory label.
- Never translate `Unknown` into a definitive negative outcome.

## Content source

Shared message dictionaries live in `messages/zh-CN.json` and `messages/en.json`. Product and coverage records remain structured data in `lib/catalog.ts` and `lib/mock-data.ts`; locale-specific labels are rendered at the page layer so the underlying catalog stays stable for API, Billing, and Admin consumers.

## Required localized surfaces

Home, Products, Coverage, Consumer Lending, Login, Contact Sales, Coming Soon, 404, Dashboard Overview, Identity Check, Fraud Check, History, and API Keys must provide Chinese and English variants as they are promoted into the product.
