import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useUser();
  if (!user) return <Navigate to='sign-in' replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
