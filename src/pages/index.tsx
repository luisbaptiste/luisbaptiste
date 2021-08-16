import React, { FC } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello.</h1>
  </Layout>
);

export default IndexPage;
