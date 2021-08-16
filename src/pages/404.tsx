import { FC, useEffect } from 'react';

import { navigate } from '@reach/router';

const NotFoundPage: FC = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};

export default NotFoundPage;
