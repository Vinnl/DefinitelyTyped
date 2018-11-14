import * as React from 'react';

export class LinkTo extends React.PureComponent<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
  { story: string, kind?: string }
> {}
