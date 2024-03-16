import { RouteObject } from 'react-router-dom';
import { PATH } from '@src/constants';
import { MainPage } from '@src/pages';
import { ProtectedPublicRoute } from '@components/templates';

const publicRoute: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <ProtectedPublicRoute />,
    children: [
      {
        path: PATH.MAIN,
        element: <MainPage />
      }
    ]
  }
];

export default publicRoute;
