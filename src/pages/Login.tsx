import React from 'react';
import KaKaoImg from '../assets/imgs/kakao-login-large-wide.png';
import oauthApi from '../api/oauthApi';
import HeaderWithBack from '../components/HeaderWithBack';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
// import { KAKAO_AUTH_URL } from '../constants/oauth';

const Login = React.memo((): JSX.Element => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const login = async () => {
    const response = await oauthApi.login();
    console.log(response);
    setAuth(response.id, response.properties);
    navigate('/');
  };

  return (
    <>
      <HeaderWithBack title={'로그인'} />
      <div className="flex h-screen flex-col items-center px-4">
        <div className="my-[80px] w-full items-start text-[20px]">
          <p>
            <span className="text-main text-[32px] font-bold">StudIt</span>을 통해 공부하고
          </p>
          <br />
          <p>목표를 달성하세요.</p>
        </div>
        <div onClick={login}>
          <img src={KaKaoImg} alt="카카오 로그인 버튼" />
        </div>
      </div>
    </>
  );
});

export default Login;
