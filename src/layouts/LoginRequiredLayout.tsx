import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function LoginRequiredLayout() {
  const { id } = useAuthStore();
  const location = useLocation();

  return id !== -1 ? <Outlet key={location.pathname} /> : <Navigate to="/login" />;
}
