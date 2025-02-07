import EditIcon from '../../assets/icons/edit.svg';
import PointIcon from '../../assets/icons/point.svg';
import { UserProfile } from '../../types/interface';
import { overlay } from 'overlay-kit';
import ProfileModifyModal from './ProfileModifyModal';
import { Link } from 'react-router-dom';

export default function ProfileSection({ userData }: { userData: UserProfile }) {
  const { nickName, points, applied, in_progress, completed, profileImage } = userData;
  const openOverlay = () => {
    overlay.open(({ isOpen, close }) => {
      return (
        <ProfileModifyModal
          userImg={userData.profileImage}
          nickName={userData.nickName}
          isOpen={isOpen}
          close={close}
        />
      );
    });
  };

  return (
    <div>
      <section className="flex gap-x-4">
        <img src={profileImage} alt={nickName} className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-y-0.5">
          <div className="flex items-center gap-x-1.5">
            <span className="font-bold">{nickName}</span>
            <button
              aria-label="프로필 변경"
              className="text-dark-gray hover:text-gray cursor-pointer rounded-full p-1 transition-colors"
              onClick={openOverlay}
            >
              <EditIcon alt="프로필 변경" className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-x-1">
            <PointIcon alt="포인트" />
            <p>
              보유한 포인트: <span className="text-main font-bold">{points.toLocaleString()} P</span>
            </p>
          </div>
        </div>
      </section>
      <section className="my-4 text-sm">
        <p className="mb-2.5 font-medium">스터디 현황</p>
        <div className="border-white-gray flex w-full justify-around rounded-md border py-2">
          <Link className="flex cursor-pointer flex-col items-center font-medium" to="/study-list?status=upcoming">
            <span className="text-main">시작 전</span>
            <span>{applied}</span>
          </Link>
          <Link className="flex cursor-pointer flex-col items-center font-medium" to="/study-list?status=ongoing">
            <span className="text-main">진행 중</span>
            <span>{in_progress}</span>
          </Link>
          <Link className="flex cursor-pointer flex-col items-center font-medium" to="/study-list?status=completed">
            <span className="text-main">완료</span>
            <span>{completed}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
