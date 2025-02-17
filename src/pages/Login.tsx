import React from 'react';
import KaKaoImg from '../assets/imgs/kakao-login-large-wide.png';
import HeaderWithBack from '../components/HeaderWithBack';
import { Link } from 'react-router-dom';
import { KAKAO_AUTH_URL } from '../constants/oauth';

const Login = React.memo((): JSX.Element => {
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
        <Link to={KAKAO_AUTH_URL}>
          <img src={KaKaoImg} alt="카카오 로그인 버튼" />
        </Link>
      </div>
    </>
  );
});

export default Login;
