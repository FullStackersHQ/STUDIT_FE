import { useState } from 'react';
import Button from '../components/Button';
import HeaderWithBack from '../components/HeaderWithBack';
import { overlay } from 'overlay-kit';
import PointShortageModal from '../components/recruit/PointShortageModal';
import { useNavigate, useParams } from 'react-router-dom';
import { recruitApi } from '../api/recruitApi';
import useGetRecruitInfo from '../hooks/recruit/useGetRecruitInfo';
import MenuIcon from '../assets/icons/hamburger-menu.svg';
import LeaderMenuList from '../components/recruit/LeaderMenuList';
import { useAuthStore } from '../store/useAuthStore';
import RecruitSuccessModal from '../components/recruit/RecruitSuccessModal';
import { upcomingStudies } from '../mocks/data/userMockData';

export default function RecruitDetail(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const action = { icon: MenuIcon, onClick: toggleMenu, ariaLabel: '모집 글 메뉴 보기' };

  const params = useParams();
  const navigate = useNavigate();
  const recruitId = Number(params.recruitId);

  const { recruitInfo: data, isLoading } = useGetRecruitInfo(recruitId);
  const { id: userId, properties, setAuth } = useAuthStore();

  const onClickJoinBtn = async () => {
    // 유저 deposit이 적다면
    if (properties.point < Number(data.deposit)) {
      overlay.open(({ isOpen, close }) => {
        return (
          <PointShortageModal
            currentPoint={{
              now: properties.point,
              need: Number(data.deposit),
            }}
            navigate={navigate}
            isOpen={isOpen}
            close={close}
            text={'포인트가 부족합니다.'}
          />
        );
      });
    } else {
      const response = await recruitApi.joinRecruit(recruitId, { deposit: data.result.deposit });
      setAuth(userId, {
        ...properties,
        point: properties.point - Number(data.result.deposit),
      });

      // 백엔드 연동 시 제거
      upcomingStudies.push({
        recruit_id: upcomingStudies.length + 1,
        gatherDate: `${data.result.studyStartAt.split('T')[0].replaceAll('-', '.')} ~ ${data.result.studyEndAt.split('T')[0].replaceAll('-', '.')}`,
        title: data.result.title,
        enterPoint: 3000,
        tag: data.result.tags.join(' '),
        category: data.result.category,
        weeklyStudyTime: data.result.goalTime,
      });

      overlay.open(({ isOpen, close }) => {
        return <RecruitSuccessModal navigate={navigate} isOpen={isOpen} close={close} text={response.message} />;
      });
    }
  };

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  const isLeader = userId === data.result.leaderId;

  return (
    <div>
      <HeaderWithBack
        title={data.result.title + ' (' + data.result.category + ')'}
        isStudyPage={true}
        {...(isLeader ? { action } : {})}
      />
      <LeaderMenuList isMenuOpen={isMenuOpen} recruitId={recruitId} data={data.result} />
      <ul
        className="overflow-y-auto px-4"
        style={{
          height: `${isLeader || userId === -1 ? 'calc(100vh - 52px - 48px)' : 'calc(100vh - 52px - 48px - 50px)'}`,
        }}
      >
        {/* tags */}
        <li className="scrollbar-hide tag-container mt-5">
          {data.result.tags.map((tag: string) => (
            <div key={tag} className="tag">
              # {tag}
            </div>
          ))}
        </li>
        {/* description */}
        <textarea className="textarea h-[200px]" value={data.result.description} disabled />

        {/* 인원 */}
        <li className="recruit-info-list">
          현재 스터디원 ( {data.result.currentMembers} / {data.result.maxMembers} ) 명
        </li>

        {/* 날짜 */}
        <li className="recruit-info-list">
          스터디 시작
          <p>
            {data.result.studyStartAt.split('T')[0]}일 {data.result.studyStartAt.split('T')[1]}시
          </p>
        </li>
        <li className="recruit-info-list">
          스터디 마감
          <p>
            {data.result.studyEndAt.split('T')[0]}일 {data.result.studyEndAt.split('T')[1]}시
          </p>
        </li>
        <li className="recruit-info-list">
          모집 기간
          <p>
            ~ {data.result.recruitEndAt.split('T')[0]}일 {data.result.recruitEndAt.split('T')[1]}시
          </p>
        </li>

        {/* leader */}
        <li className="recruit-info-list">스터디장: {data.result.leaderNickName}</li>

        {/* deposit */}
        <li className="recruit-info-list">포인트: {data.result.deposit}</li>

        {/* goalTime */}
        <li className="recruit-info-list">주당 목표 시간: {data.result.goalTime}</li>
      </ul>

      {userId !== -1 && !isLeader && (
        <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
          <Button text={'가입하기'} onClick={onClickJoinBtn} ariaLabel={'가입하기 버튼'} />
        </div>
      )}
    </div>
  );
}
