import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationSection from "../components/Location/LocationSection"

const SecondPage = () => (
  <Layout>
    <LocationSection />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
