// Use comments to prevent sorting
// ---
import "@mantine/core/styles.css"
import "#styles/custom.css"
import { Loader } from "@mantine/core"
import { Center } from "@mantine/core"
// ---
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { isRouteErrorResponse } from "react-router"
import { JsonLd } from "react-schemaorg"
import { Layout as LayoutComponent } from "#components/Layout/index.ts"
import { Error } from "#components/System/index.ts"
import { System } from "#components/System/index.ts"
import { LanguageIdDefault } from "#constants/language.ts"
import * as settings from "#settings.ts"
import type { Route } from "./+types/root.tsx"

export default function Page() {
  return <Outlet />
}

export function HydrateFallback() {
  return (
    <Center h="25vh">
      <Loader type="dots" />
    </Center>
  )
}

export function ErrorBoundary(props: Route.ErrorBoundaryProps) {
  const code = isRouteErrorResponse(props.error) ? props.error.status : 500

  return <Error code={code} />
}

export function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang={LanguageIdDefault} dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <title>{settings.TITLE}</title>
        <meta name="description" content={settings.DESCRIPTION} />

        <meta property="og:title" content={settings.TITLE} />
        <meta property="og:description" content={settings.DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={settings.URL} />
        <meta property="og:site_name" content={settings.TITLE} />
        <meta property="og:locale" content={LanguageIdDefault} />

        <link rel="icon" type="image/png" href="/favicon.png" />

        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: settings.TITLE,
            url: settings.URL,
          }}
        />

        <Links />
        <Meta />
      </head>

      <body>
        <System>
          <LayoutComponent>{props.children}</LayoutComponent>
        </System>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
