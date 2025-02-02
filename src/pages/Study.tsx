import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import HamburgerMenuIcon from '../assets/icons/hamburger-menu.svg';
import StudyFnb from '../components/StudyFnb';
import { useState } from 'react';

const Study = React.memo((): JSX.Element => {
  const studyName = '25년 SAT 준비반';
  const handler = () => console.log('테스트');
  const action = { icon: HamburgerMenuIcon, ariaLabel: '스터디 메뉴 보기', onClick: () => handler };
  const [nav, setNav] = useState('스터디');

  return (
    <div>
      <HeaderWithBack title={studyName} action={action} isStudyPage />
      <StudyFnb nav={nav} setNav={setNav} />
    </div>
  );
});

export default Study;
