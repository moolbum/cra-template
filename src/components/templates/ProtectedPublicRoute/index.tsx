import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PATH } from '@src/constants';

const ProtectedPublicRoute = () => {
  const location = useLocation();

  if (location.pathname === PATH.ROOT) {
    return <Navigate to={PATH.MAIN} />;
  }

  return <Outlet />;
};

export default ProtectedPublicRoute;
