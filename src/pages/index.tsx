import { TrackedNav } from "@objectiv/tracker-react";
import * as React from "react"
import TrackedLink from "../components/TrackedLink";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  margin: "1%"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        🎉🎉🎉
      </h1>

      <TrackedNav id={'header'}>
        <TrackedLink
          style={linkStyle}
          to={'/about'}
        >
          About
        </TrackedLink>
        |
        <TrackedLink
          style={linkStyle}
          to={'/app/profile'}
        >
          Profile
        </TrackedLink>
        |
        <TrackedLink
          style={linkStyle}
          to={'/app/details'}
        >
          Details
        </TrackedLink>
      </TrackedNav>

      <hr />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <hr />

      <TrackedNav id={'footer'}>
        <TrackedLink
          style={linkStyle}
          to={'/about'}
        >
          About
        </TrackedLink>
        |
        <TrackedLink
          style={linkStyle}
          to={'/app/profile'}
        >
          Profile
        </TrackedLink>
        |
        <TrackedLink
          style={linkStyle}
          to={'/app/details'}
        >
          Details
        </TrackedLink>
      </TrackedNav>


    </main>
  )
}

export default IndexPage
