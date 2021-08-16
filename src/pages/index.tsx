import React, { FC } from 'react';

import { H1, Layout, Seo } from 'components';

import 'styles/global.css';

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Luis Baptiste" />
    <H1 className="text-blue-500">Hello.</H1>
  </Layout>
);

export default IndexPage;
