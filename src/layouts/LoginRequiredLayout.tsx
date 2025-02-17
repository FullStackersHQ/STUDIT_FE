import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';

export default function LoginRequiredLayout() {
  const { id } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (id === -1) {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <>
      <main className="md:before:bg-white-gray md:after:bg-white-gray relative mx-auto flex h-screen w-full max-w-3xl flex-col justify-between pt-[52px] md:before:absolute md:before:right-0 md:before:bottom-0 md:before:h-[calc(100%-52px)] md:before:w-[1px] md:before:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[calc(100%-52px)] md:after:w-[1px] md:after:content-['']">
        <Outlet key={location.pathname} />
      </main>
    </>
  );
}
