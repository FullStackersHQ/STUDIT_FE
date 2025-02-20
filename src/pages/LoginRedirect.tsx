import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';
import oauthApi from '../api/oauthApi';

export default function LoginRedirect() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      const response = await oauthApi.postOauthCode(code);
      if (response.status === 200) {
        setAuth(response.data.id, response.data.properties);
        navigate('/', { replace: true });
      } else navigate('/login', { replace: true });
    };

    kakaoLogin();
  }, [code, navigate, setAuth]);

  return (
    <>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
    </>
  );
}
