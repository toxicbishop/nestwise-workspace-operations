# WorkNest migration roadmap

Port github.com/toxicbishop/WorkNest (master) into this TanStack Start project.

- [x] Copy frontend source (types, lib, context, components, features) into src/
- [x] Adapt Next.js bits: next/link -> router Link, usePathname -> useRouterState, process.env -> import.meta.env
- [x] Merge repo utils (formatCurrency, formatDate) into src/lib/utils.ts
- [x] Port WorkNest design tokens into src/styles.css
- [x] Create routes: /, /analytics, /leads, /members, /spaces, /bookings, /billing, /settings (each with head())
- [x] Mount QueryProvider + WorkNestProvider + AppShell in __root.tsx
- [x] Verify: typecheck clean, build OK, Playwright pass over all 8 pages (desktop + phone), nav + modal + mobile sidebar
- [x] Port repo vitest suite (36 tests, all passing)
- [ ] Optional next step (needs user decision): replace the mock/localStorage data layer with a Lovable Cloud backend (tables + server functions), mirroring the repo's FastAPI models
