import { navigate } from 'gatsby';
import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    void navigate('/');
  }, []);

  return null;
};

export default NotFoundPage;
