import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationSection from "../components/Location/LocationSection"

const Location = () => (
  <Layout>
    <LocationSection />
  </Layout>
)

export const Head = () => <Seo title="Location" />

export default Location
