<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## WorkNest port

- This app is a port of github.com/toxicbishop/WorkNest (master, Next.js App Router) onto TanStack Start. Route pages live in src/routes/*; page markup stays inside each route file; domain components live in src/features, layout in src/components/layout.
- tsconfig targets plain `strict` (no exactOptionalPropertyTypes, noUncheckedIndexedAccess, noPropertyAccessFromIndexSignature, noImplicitReturns) to match the imported WorkNest codebase; do not re-enable those flags without porting the code accordingly.
- The app runs on its built-in fixtures (src/lib/mock-data.ts) persisted to localStorage, matching WorkNest's own offline mode. It upgrades to a live API only when VITE_API_URL is set (the original FastAPI backend). api-client.ts must never fetch at import or mount time unless backendConfigured is true.
- WorkNest design tokens (forest/nest palette) are appended to src/styles.css under the WorkNest comment block; keep them alongside the shadcn oklch tokens.

## Brand & marketing site (user-chosen)

- Public marketing homepage lives at src/routes/index.tsx; the CRM lives entirely under /app/* with its shell mounted by the /app layout route (src/routes/app.tsx). Do not remount AppShell/WorkNestProvider in __root.
- Brand palette is Charcoal & Ember: charcoal #1a1a1a/#2d2d2d/#4a4a4a, ember accent #e85d3a (tokens in src/styles.css @theme: ember, ember-deep, ember-soft, charcoal-*, paper, paper-dim; fonts Sora display, Manrope body, loaded via link in __root). The CRM keeps semantic status colors; only brand color was swapped (old forest greens map to charcoal/neutrals). Primary CTAs and focus rings use ember.
