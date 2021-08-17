import { navigate } from '@reach/router';
import { FC, useEffect } from 'react';

const NotFoundPage: FC = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};

export default NotFoundPage;
