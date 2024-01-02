import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, location, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.url

  // Additional meta tags for enhanced SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "805CashAndDash.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": "CA"
    },
    "url": siteUrl,
    // "telephone": "YOUR_BUSINESS_PHONE_NUMBER"
  }

  const fullTitle = title ? `${title} - 805CashAndDash.com` : defaultTitle;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
      {children}
    </>
  )
}

export default Seo
