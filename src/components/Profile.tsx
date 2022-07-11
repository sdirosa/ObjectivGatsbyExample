/*
 * Copyright 2022 Objectiv B.V.
 */

import { RouteComponentProps } from "@reach/router";
import React from "react"
import TrackedLink from "./TrackedLink";

const Profile = (_: RouteComponentProps) => {
  return (
    <>
      <h1>Client-only route: Profile</h1>
      <TrackedLink to={'/'}>Back</TrackedLink>
    </>
  )
}

export default Profile