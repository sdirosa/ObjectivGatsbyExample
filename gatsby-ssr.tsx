/*
 * Copyright 2022 Objectiv B.V.
 */

import * as React from "react"
import { Tracker } from "@objectiv/tracker-core";
import { ObjectivProvider } from "@objectiv/tracker-react";

const tracker = new Tracker({
  applicationId: 'gatsby-demo-app-ssr',
  active: false
})

export const wrapRootElement = ({ element }) => {
  return (
    <ObjectivProvider tracker={tracker}>
      {element}
    </ObjectivProvider>
  )
}
