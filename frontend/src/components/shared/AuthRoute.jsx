import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/AuthContext';

export const AuthRoute = ({ role, children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user.role !== role && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
