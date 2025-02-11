import { useCallback } from 'react';
import Button from '../components/Button';
import HeaderWithBack from '../components/HeaderWithBack';
import { overlay } from 'overlay-kit';
import PointShortageModal from '../components/recruit/PointShortageModal';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { recruitApi } from '../api/recruitApi';
import DeleteModal from '../components/recruit/DeleteModal';

export default function StudyRecruit(): JSX.Element {
  const userId: number = 1002;
  const userDeposit: number = 7000;
  const { recruitId } = useParams<{
    recruitId: string;
  }>();

  const { data, isLoading } = useQuery({
    queryKey: ['recruitStudy', recruitId],
    queryFn: async () => await recruitApi.getRecruitInfo(recruitId),
  });

  const navigate = useNavigate();
  console.log(data);
  const onClickJoinBtn = useCallback(async () => {
    // 유저 deposit이 적다면
    if (userDeposit < Number(data.result.deposit)) {
      overlay.open(({ isOpen, close }) => {
        return (
          <PointShortageModal
            currentPoint={{
              now: userDeposit,
              need: Number(data.result.deposit),
            }}
            navigate={navigate}
            isOpen={isOpen}
            close={close}
            text={'포인트가 부족합니다.'}
          />
        );
      });
    }

    const { data: response } = await recruitApi.joinRecruit(recruitId, { deposit: data.result.deposit });

    console.log(response);
  }, [data, recruitId]);

  // 스터디장이면 수정, 삭제 기능 추가
  const deleteStudy = useCallback(async () => {
    const response = await recruitApi.deleteRecruitInfo(recruitId);
    if (response.code === 200) {
      overlay.open(({ isOpen, close }) => {
        return <DeleteModal navigate={navigate} isOpen={isOpen} close={close} text={response.message} />;
      });
    }
  }, []);

  const editStudy = () => {
    navigate(`/edit-recruit/${recruitId}`, { replace: true, state: { ...data.result } });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderWithBack title={data.result.title + ' (' + data.result.category + ')'} isStudyPage={false} />
      <ul className="overflow-y-auto px-4" style={{ height: `calc(100vh - 52px - 48px - 50px)` }}>
        {/* tags */}
        <div className="scrollbar-hide tag-container mt-2">
          {data.result.tags.map((tag: string) => (
            <div key={tag} className="tag">
              # {tag}
            </div>
          ))}
        </div>
        {/* description */}
        <textarea className="textarea" value={data.result.description} disabled />

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

        {userId === data.result.leaderId && (
          <div className="mt-2 flex w-full justify-evenly">
            <button
              className={`bg-sub text-main hover:bg-sub-hover hover:text-main-hover h-12 w-[45%] rounded-[5px] text-sm font-bold transition-colors`}
              aria-label={'삭제하기 버튼'}
              onClick={deleteStudy}
            >
              글 삭제하기
            </button>
            <button
              className={`bg-sub text-main hover:bg-sub-hover hover:text-main-hover h-12 w-[45%] rounded-[5px] text-sm font-bold transition-colors`}
              aria-label={'수정하기 버튼'}
              onClick={editStudy}
            >
              글 수정하기
            </button>
          </div>
        )}
      </ul>

      <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
        <Button text={'가입하기'} onClick={onClickJoinBtn} ariaLabel={'가입하기 버튼'} />
      </div>
    </div>
  );
}
