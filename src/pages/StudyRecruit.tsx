import { useCallback } from 'react';
import Button from '../components/Button';
import HeaderWithBack from '../components/HeaderWithBack';
import { StudyRecruitType } from '../types/interface';
import client from '../utils/client';
import { overlay } from 'overlay-kit';
import LinkModal from '../components/recuit/LinkModal';
import { useNavigate } from 'react-router-dom';

export default function StudyRecruit(): JSX.Element {
  const userId: number = 1002;
  const userDeposit: number = 7000;
  const data: StudyRecruitType = {
    recruitId: 1,
    leader: { userId: 1001, username: '스터디장_닉네임' },
    title: 'SpringBoot 스터디',
    description: 'Spring Boot를 활용하여 개인 프로젝트 만들어보기',
    category: '코딩',
    tags: ['Spring', 'Java'],
    goalTime: '100',
    deposit: '10000',
    studyStartAt: '2025-02-11T00',
    studyEndAt: '2025-04-11T00',
    recruitEndAt: '2025-02-11T00',
    currentMembers: 3,
    maxMembers: 5,
    status: 'ACTIVE',
  };

  const navigate = useNavigate();

  const onClickJoinBtn = useCallback(async () => {
    // 유저 deposit이 적다면
    if (userDeposit < Number(data.deposit)) {
      overlay.open(({ isOpen, close }) => {
        return (
          <LinkModal
            currentPoint={{
              now: userDeposit,
              need: Number(data.deposit),
            }}
            navigate={navigate}
            isOpen={isOpen}
            close={close}
            text={'포인트가 부족합니다. 충전 페이지로 이동합니다.'}
          />
        );
      });
    }

    const { data: response } = await client.post('/api/recruits/{recruitId}/registers', {
      deposit: data.deposit,
    });

    console.log(response);
  }, []);

  // 스터디장이면 수정, 삭제 기능 추가
  const deleteStudy = useCallback(async () => {
    await console.log('delete');
  }, []);

  const editStudy = useCallback(async () => {
    await console.log('editStudy');
  }, []);

  return (
    <div>
      <HeaderWithBack title={data.title + ' (' + data.category + ')'} isStudyPage={false} />
      <div className="overflow-y-auto px-4" style={{ height: `calc(100vh - 52px - 48px - 50px)` }}>
        {/* description */}
        <textarea className="textarea" value={data.description} disabled />

        {/* tags */}
        <div className="scrollbar-hide tag-container mt-2">
          {data.tags.map((tag: string) => (
            <div key={tag} className="tag">
              # {tag}
            </div>
          ))}
        </div>

        {/* 인원 */}
        <div className="mt-2">
          현재 스터디원 ( {data.currentMembers} / {data.maxMembers} ) 명
        </div>

        {/* 날짜 */}
        <div className="mt-2">
          <p>스터디 시작</p>
          {data.studyStartAt.split('T')[0]}일 {data.studyStartAt.split('T')[1]}시
        </div>
        <div className="mt-2">
          <p>스터디 마감</p>
          {data.studyEndAt.split('T')[0]}일 {data.studyEndAt.split('T')[0]}시
        </div>
        <div className="mt-2">
          <p>모집 기간</p>
          {data.recruitEndAt.split('T')[0]}일 {data.recruitEndAt.split('T')[0]}시까지
        </div>

        {/* leader */}
        <div className="mt-2">스터디장: {data.leader.username}</div>

        {/* deposit */}
        <div className="mt-2">스터디장: {data.deposit}</div>

        {/* goalTime */}
        <div className="mt-2">스터디장: {data.goalTime}</div>

        {userId === data.leader.userId && (
          <Button text={'글 삭제하기'} ariaLabel={'삭제하기 버튼'} onClick={deleteStudy} />
        )}
        {userId === data.leader.userId && (
          <Button text={'글 수정하기'} ariaLabel={'수정하기 버튼'} onClick={editStudy} />
        )}
      </div>

      <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
        <Button text={'가입하기'} onClick={onClickJoinBtn} ariaLabel={'가입하기 버튼'} />
      </div>
    </div>
  );
}
