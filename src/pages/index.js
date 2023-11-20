import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Kbb from "../components/KBB/Kbb"
import Howto from "../components/Howto/Howto"
import InstaPosts from "../components/InstaPosts/InstaPosts"
// import * as styles from "../components/index.module.css"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Kbb />
    <Howto />
    <InstaPosts />
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
