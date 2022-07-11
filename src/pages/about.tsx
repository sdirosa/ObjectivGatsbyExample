import * as React from "react"
import TrackedLink from "../components/TrackedLink";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Actual page: About</title>
      <h1>Actual page: About</h1>
      <TrackedLink to={'/'}>Back</TrackedLink>
    </main>
  )
}

export default IndexPage
