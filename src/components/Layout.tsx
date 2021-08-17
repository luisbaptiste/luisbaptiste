import { Seo } from 'components';
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

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="mx-10 md:mx-32 my-8">
    <Seo title={title}>{children}</Seo>
    {children}
  </div>
);

export { Layout };
