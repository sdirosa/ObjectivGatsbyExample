/*
 * Copyright 2022 Objectiv B.V.
 */

import { RouteComponentProps } from "@reach/router";
import React from "react"
import TrackedLink from "./TrackedLink";

const Details = (_: RouteComponentProps) => {
  return (
    <>
      <h1>Client-only route: Details</h1>
      <TrackedLink to={'/'}>Back</TrackedLink>
    </>
  )
}

export default Details