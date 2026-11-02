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
