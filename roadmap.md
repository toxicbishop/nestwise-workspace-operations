# WorkNest migration roadmap

Port github.com/toxicbishop/WorkNest (master) into this TanStack Start project.

- [ ] Copy frontend source (types, lib, context, components, features) into src/
- [ ] Adapt Next.js bits: next/link -> router Link, usePathname -> useRouterState, process.env -> import.meta.env
- [ ] Merge repo utils (formatCurrency, formatDate) into src/lib/utils.ts
- [ ] Port WorkNest design tokens into src/styles.css
- [ ] Create routes: /, /analytics, /leads, /members, /spaces, /bookings, /billing, /settings (each with head())
- [ ] Mount QueryProvider + WorkNestProvider + AppShell in __root.tsx
- [ ] Verify: typecheck, build log clean, Playwright pass over all 8 pages (desktop + phone)
- [ ] Decide with user: port repo vitest suite; wire backend to Lovable Cloud later
