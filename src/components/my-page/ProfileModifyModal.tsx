import useModifyProfile from '../../hooks/my-page/useModifyProfile';
import ModalOverlay from '../ModalOverlay';
import EditIcon from '../../assets/icons/edit.svg';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';
import { handleMaxLengthChange, handleKeyDown } from '../../utils/commonUtils';

export default function ProfileModifyModal({
  userImg,
  nickName,
  isOpen,
  close,
  userId,
}: {
  userImg: string;
  nickName: string;
  isOpen: boolean;
  close: () => void;
  userId: number;
}) {
  const { profile, handleImgUpload, handleClick, fileInputRef, onNickNameChange, handleModifyProfile, error } =
    useModifyProfile({
      userImg,
      nickName,
      userId,
    });
  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <section className="modal-container h-[289px]">
        <h1 className="text-main font-bold">프로필을 수정해요</h1>
        <div className="relative mt-5">
          <img src={profile.userImg} alt={profile.nickName + '프로필'} className="h-20 w-20 rounded-full" />
          <button
            className="bg-sub text-dark-gray hover:bg-sub-hover hover:text-gray absolute right-0 -bottom-1 rounded-full p-1 transition-colors"
            aria-label="프로필 사진 변경하기"
            onClick={handleClick}
          >
            <EditIcon className="h-5 w-5" alt="프로필 사진 변경" />
          </button>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImgUpload} className="hidden" />
        </div>
        <div className="mb-4 flex flex-col gap-y-1">
          <input
            onKeyDown={(e) => handleKeyDown(e, () => handleModifyProfile(close))}
            type="text"
            onChange={(e) => handleMaxLengthChange(e, 10, onNickNameChange)}
            className="mt-6 w-[140px] border-b border-black py-1 pl-1.5 text-sm transition-colors"
            value={profile.nickName}
          />
          {error ? (
            <p className="text-deduct text-xs font-medium">중복된 닉네임이에요</p>
          ) : (
            <span className="self-end text-xs">{profile.nickName.length} /10</span>
          )}
        </div>
        <button aria-label="프로필 수정 모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="프로필 수정 모달 닫기" />
        </button>
        <Button text="수정하기" onClick={() => handleModifyProfile(close)} isSmall />
      </section>
    </ModalOverlay>
  );
}
