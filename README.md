# Ember website

A dark-first marketing site, Fumadocs documentation site, and status surface for Ember, built with Next.js App Router, TypeScript, Tailwind CSS, and MDX.

## Requirements

- Node.js 18.17 or newer (Node.js 20 LTS recommended)
- npm 9+ (or a compatible package manager)

## Installation

```bash
npm install
```

Copy `.env.example` to `.env.local` if you need to override public defaults. Replace `NEXT_PUBLIC_DISCORD_CLIENT_ID=YOUR_BOT_ID` with Ember's real Discord application ID before launch.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`. The invite route uses the configured Discord client ID; `/dashboard` redirects to the central dashboard URL.

## Production build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_DISCORD_CLIENT_ID`; optionally add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_GITHUB_URL`.
4. Deploy with Vercel's standard Next.js preset—no database, custom server, or `vercel.json` is needed.

## Project configuration

Central public defaults and placeholder values live in `lib/config.ts`. Replace the Discord client ID, site/GitHub URLs, and placeholder pricing/statistics when verified data is available. Documentation MDX content lives under `content/docs`.
