# AGENTS.md — Caledonian Clash Website

## Commands

```sh
npm run dev       # Vite dev server (HTTPS, port 51076, HMR)
npm run build     # prebuild (generate posts) → vite build → dist/
npm run lint      # ESLint flat config (./eslint.config.js)
npm run deploy    # build + gh-pages -d dist
npm run prebuild  # standalone: generate static HTML posts from MDX
```

All commands run from `cc_website_react.client/`. The root `package.json` only has `prebuild` (triggers from there).

## Content (MDX → static HTML)

- Source posts: `src/content/posts/<slug>/` each with multiple `.mdx` files
- Build step: `src/scripts/generate-posts.mjs` reads MDX, parses frontmatter via `gray-matter`, renders to static HTML via `remark` + `remark-html` + `remark-gfm`
- Output: `public/posts/<slug>/index.html` + per-post JSON meta + `public/posts/index.json` + `public/sitemap.xml`
- The dev server watches `src/content/posts/` for changes and triggers full-page reload via a custom Vite plugin
- **Date format in frontmatter: `dd/mm/yyyy`** — the `parseDate()` helper in `generate-posts.mjs` splits on `/`
- Template: `src/content/template.mdx` shows available frontmatter fields (`title`, `description`, `date`, `thumbnail`, `banner`)
- Images referenced in MDX are copied from the post source folder to the output folder

## Architecture

- **Vite 8** + **React 19** SPA, **no TypeScript** (`jsconfig.json` has `checkJs: false`)
- **React Router 7** (`BrowserRouter` with `basename={import.meta.env.BASE_URL}`)
- Routes: `/` (home), `/news`, `/news/:slug`, `/nml4`, `/new-players`
- **Bootstrap 5** + **react-bootstrap** for UI, **SCSS** for custom styling (sass compiler via npm)
- Path alias: `@` → `src/`
- `src/hooks/useMeta.js` — page-level meta/SEO
- `src/lib/posts.js` — server-side posts helper (used by generate-posts; note it reads `content/posts` relative to CWD — likely dead code)

## GitHub Pages

- **Custom domain**: `caledonianclash.co.uk` (`public/CNAME`)
- SPA routing: `public/404.html` reads `?p=` param and restores the route — this is how GH Pages handles client-side routing
- **CI is NOT automated**: `static.yml` deploys the raw repo to Pages, but the actual build must be done via `npm run deploy`. The deploy script pushes to `gh-pages` branch, which triggers the workflow.
- Base URL: `"/"` in vite config (the CNAME makes it work)

## Dev server notes

- Requires **HTTPS certs**: auto-provisioned on first run via `dotnet dev-certs https --export-path ...`
- Proxy: `/weatherforecast` → `https://localhost:7079` (ASP.NET backend — mostly vestigial)
- Debug in VS Code: `localhost (Chrome)` launch config at `https://localhost:51076`

## Project quirks

- **No test suite**: `esproj` references Vitest but no config or test files exist
- **No type checking**: pure JS with `checkJs: false`
- `ShouldRunBuildScript: false` in `esproj` — Visual Studio won't run `npm run build` on Build
- Navbar SCSS colours (`MainNavbar.scss`) need extracting to variables (see `TODO.md`)
