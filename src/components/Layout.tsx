import { Seo } from 'components';
import React, { FC, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="px-4 md:px-28 pt-4 pd:mt-8 pb-20">
    <Seo title={title}>{children}</Seo>
    {children}
  </div>
);

export { Layout };
