import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';
import { useAuthStore } from '../store/useAuthStore';
import oauthApi from '../api/oauthApi';

export default function Header() {
  const { id, clearAuth } = useAuthStore();
  const logout = async () => {
    const response = await oauthApi.logout();
    if (response.status === 200) {
      clearAuth();
    }
  };

  return (
    <header className="md:border-white-gray fixed top-0 left-1/2 z-[999] mx-auto flex h-13 w-full max-w-3xl -translate-x-1/2 items-center justify-between bg-white px-4 md:border-x">
      <Link to={'/'} aria-label="홈으로">
        <img src={Logo} alt="Logo" className="h-auto w-20" />
      </Link>
      {id === -1 ? (
        <Link to={'/login'} className="text-main-text text-center text-sm font-bold">
          로그인
        </Link>
      ) : (
        <div className="text-main-text text-center text-sm font-bold" onClick={logout}>
          로그아웃
        </div>
      )}
    </header>
  );
}
