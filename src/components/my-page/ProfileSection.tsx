import EditIcon from '../../assets/icons/edit.svg';
import PointIcon from '../../assets/icons/point.svg';
import { UserProfile } from '../../types/interface';
import { overlay } from 'overlay-kit';
import ProfileModifyModal from './ProfileModifyModal';
import { Link } from 'react-router-dom';
import ChargeModal from './ChargeModal';

export default function ProfileSection({ userData, userId }: { userData: UserProfile; userId: number }) {
  const { nickName, points, applied, in_progress, completed, profileImage } = userData;
  const openModifyModal = () => {
    overlay.open(({ isOpen, close }) => {
      return (
        <ProfileModifyModal
          userImg={userData.profileImage}
          nickName={userData.nickName}
          isOpen={isOpen}
          close={close}
          userId={userId}
        />
      );
    });
  };
  const openChargePoint = () => {
    overlay.open(({ isOpen, close }) => {
      return <ChargeModal isOpen={isOpen} close={close} currentPoint={points} userId={userId} />;
    });
  };

  return (
    <div>
      <section className="flex items-center justify-between">
        <div className="flex gap-x-2">
          <img src={profileImage} alt={nickName + '프로필'} className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-y-0.5">
            <div className="flex items-center gap-x-1.5">
              <span className="font-bold">{nickName}</span>
              <button
                aria-label="프로필 변경"
                className="text-dark-gray hover:text-gray cursor-pointer rounded-full p-1 transition-colors"
                onClick={openModifyModal}
              >
                <EditIcon alt="프로필 변경" className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-x-1">
              <PointIcon alt="포인트" />
              <p>
                보유한 포인트: <span className="text-main-text font-bold">{points.toLocaleString()} P</span>
              </p>
            </div>
          </div>
        </div>
        <button className="btn-sm justify-self-end" onClick={openChargePoint}>
          충전하기
        </button>
      </section>
      <section className="my-4 text-sm">
        <p className="mb-2.5 font-medium">스터디 현황</p>
        <div className="border-white-gray flex w-full justify-around rounded-md border py-2">
          <Link className="flex cursor-pointer flex-col items-center" to="/my-study?status=upcoming">
            <span className="text-main-text font-bold">시작 전</span>
            <span>{applied}</span>
          </Link>
          <Link className="flex cursor-pointer flex-col items-center" to="/my-study?status=ongoing">
            <span className="text-main-text font-bold">진행 중</span>
            <span>{in_progress}</span>
          </Link>
          <Link className="flex cursor-pointer flex-col items-center" to="/my-study?status=completed">
            <span className="text-main-text font-bold">완료</span>
            <span>{completed}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
