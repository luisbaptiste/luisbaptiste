import { Seo } from 'components';
import React, { FC, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="m-8">
    <Seo title={title}>{children}</Seo>
    {children}
  </div>
);

export { Layout };
