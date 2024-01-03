import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800">404: Not Found</h1>
      <p className="text-xl text-gray-600 mt-4">
        You just hit a route that doesn't exist...
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
