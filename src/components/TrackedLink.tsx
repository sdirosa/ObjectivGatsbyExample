/*
 * Copyright 2022 Objectiv B.V.
 */

import {
  LinkContextWrapper,
  LinkContextWrapperProps,
  makeAnchorClickHandler,
  makeIdFromTrackedAnchorProps,
  useLocationStack
} from "@objectiv/tracker-react";
import { GatsbyLinkProps, Link } from "gatsby";
import * as React from "react";

/**
 * Wrapped Link will accept all GatsbyLinkProps and, optionally, our own TrackedLinkContextProps.
 * We omit the `id` and `href` props from LinkContextWrapperProps, since we are going to map them automatically.
 */
export type TrackedLinkProps = Omit<LinkContextWrapperProps,  'href' | 'id'> & GatsbyLinkProps<unknown>;

/**
 * Wraps Gatsby Link in a LinkContext and automatically instruments tracking PressEvent on click.
 */
const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>((props, ref) => {
  // Use `to` attribute for the `href` prop.
  const linkContextHref = props.to;

  // Attempt to generate an id for LinkContext by looking at `id`, `title` or `children` props.
  const linkContextId = makeIdFromTrackedAnchorProps({ ...props });

  // If we couldn't generate an `id`, log the issue and return a regular Link component.
  const locationStack = useLocationStack();
  if (!linkContextId) {
    if (globalThis.objectiv.devTools) {
      const locationPath = globalThis.objectiv.devTools.getLocationPath(locationStack);
      globalThis.objectiv.devTools.TrackerConsole.error(
        `｢objectiv｣ Could not generate id for LinkContext @ ${locationPath}. Either add the \`id\` or \`title\` prop.`
      );
    }
    return <Link
      {...props}
      // @ts-ignore Gatsby TS ref definitions are incorrect, see https://github.com/gatsbyjs/gatsby/issues/34325
      ref={ref}
    />;
  }

  return (
    <LinkContextWrapper id={linkContextId} href={linkContextHref}>
      {(trackingContext) => (
        <Link
          {...props}
          // @ts-ignore same as above. See https://github.com/gatsbyjs/gatsby/issues/34325
          ref={ref}
          onClick={makeAnchorClickHandler({
            trackingContext,
            anchorHref: linkContextHref,
            onClick: props.onClick
          })}
        />
      )}
    </LinkContextWrapper>
  );
})

export default TrackedLink;
