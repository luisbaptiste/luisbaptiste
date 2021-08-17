import { H1, Seo } from 'components';
import { Link } from 'gatsby';
import React, { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

type NavLinkProps = {
  name: string;
  to: string;
  target?: HTMLAttributeAnchorTarget;
};

const NavLink: FC<NavLinkProps> = ({ name, to, target }) => (
  <a href={to} className="ml-3 select-none" target={target}>
    {name}
  </a>
);

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="mx-10 my-3">
    <Seo title={title}>{children}</Seo>
    {children}
  </div>
);

export { Layout };
