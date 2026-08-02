# Aqua Linux Site

Aqua Linux first release landing screen, built with
[vinext](https://github.com/cloudflare/vinext) for Sites deployment.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- `app/page.tsx`: centered release page
- `app/release-countdown.tsx`: first release countdown
- `app/globals.css`: Aqua dark glow styling
- `.openai/hosting.json`: Sites project binding

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build and verify the release page structure

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
