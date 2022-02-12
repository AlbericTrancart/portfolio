import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-void
    void navigate('/');
  }, []);

  return null;
};

export default NotFoundPage;
