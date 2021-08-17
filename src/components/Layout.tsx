import { Seo } from 'components';
import React, { FC, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="mx-4 md:mx-32 my-4 md:my-8">
    <Seo title={title}>{children}</Seo>
    {children}
  </div>
);

export { Layout };
