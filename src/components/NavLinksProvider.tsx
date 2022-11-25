import React, { createContext, ReactElement, ReactNode } from 'react';

export const NavLinksContext = createContext<{ path: string; label: string }[]>([]);

export interface NavLinksProviderProps {
  links: Link[];
  children?: ReactNode;
}

export interface Link {
  path: string;
  label: string;
}

export function NavLinksProvider(props: NavLinksProviderProps): ReactElement {
  return <NavLinksContext.Provider value={props.links}>{props.children}</NavLinksContext.Provider>;
}
