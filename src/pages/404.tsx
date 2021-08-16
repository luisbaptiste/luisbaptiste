import React, { FC, useEffect } from 'react';

import { Layout, Seo } from 'components';
import { navigate } from '@reach/router';

const NotFoundPage: FC = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
    </Layout>
  );
};

export default NotFoundPage;
