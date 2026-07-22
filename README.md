# ThreatNest website

Static Next.js frontend for ThreatNest. The API is maintained separately in
[`ilyasgy/tn-backend`](https://github.com/ilyasgy/tn-backend).

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_API_BASE` to the local or deployed backend URL.
3. Run `npm ci`.
4. Run `npm run dev`.

## Production

`npm run build` creates the static site in `out`. Configure the public API base and optional Google Analytics measurement ID before building.

Run `npm run check` before publishing.
