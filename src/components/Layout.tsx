import { FinePrint, Seo } from 'components';
import React, { FC, memo, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = memo(({ children, title }) => (
  <div className="px-4 md:px-28 pt-4 pd:pt-8 flex flex-col h-full justify-between">
    <Seo title={title}>{children}</Seo>
    <script async src="//static.getclicky.com/101329869.js"></script>
    <main>{children}</main>
    <footer className="text-center text-xs pt-8 pb-32 sm:pb-4">
      <FinePrint>&copy; Luis Baptiste {new Date().getFullYear()}</FinePrint>
    </footer>
  </div>
));

export { Layout };
