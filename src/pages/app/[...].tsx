import React from "react"
import { Router } from "@reach/router"
import Profile from "../../components/Profile"
import Details from "../../components/Details"
const App = () => {
  return (
    <>
      <Router>
        <Profile path="/app/profile" />
        <Details path="/app/details" />
      </Router>
    </>
  )
}
export default App