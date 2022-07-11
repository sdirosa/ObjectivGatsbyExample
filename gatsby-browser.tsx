/*
 * Copyright 2022 Objectiv B.V.
 */

import * as React from "react"
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";

if(process.env.NODE_ENV.startsWith('dev') && typeof window !== 'undefined') {
  require('@objectiv/developer-tools');
}

const tracker = new ReactTracker({
  applicationId: 'gatsby-demo-app',
  endpoint: 'http://localhost:8081'
})

export const wrapRootElement = ({ element }) => {
  return (
    <ObjectivProvider tracker={tracker}>
      {element}
    </ObjectivProvider>
  )
}
