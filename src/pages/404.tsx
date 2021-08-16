import React, { FC } from 'react';

import { Layout, Seo } from 'components';

const NotFoundPage: FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
  </Layout>
);

export default NotFoundPage;
