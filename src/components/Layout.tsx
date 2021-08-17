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
  <a href={to} className="pl-3 select-none" target={target}>
    {name}
  </a>
);

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="m-4">
    <Seo title={title}>{children}</Seo>
    <header className="flex flex-row justify-between items-baseline mb-2">
      <Link to="/">
        <H1 className="select-none">Luis Baptiste</H1>
      </Link>
      <nav>
        <NavLink
          to="https://www.instagram.com/lf.baptiste/"
          name="Instagram"
          target="_blank"
        />
        <NavLink
          to="mailto:luis.baptiste@protonmail.com"
          name="Contact"
          target="_blank"
        />
      </nav>
    </header>
    {children}
  </div>
);

export { Layout };
