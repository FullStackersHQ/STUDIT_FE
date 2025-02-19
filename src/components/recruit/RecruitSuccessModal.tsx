import ModalOverlay from '../ModalOverlay';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';
import { NavigateFunction } from 'react-router-dom';

export default function RecruitSuccessModal({
  isOpen,
  close,
  text,
  navigate,
}: {
  isOpen: boolean;
  close: () => void;
  text: string;
  navigate: NavigateFunction;
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <section className="modal-container h-[267px] justify-evenly">
        <p className="text-main mb-4 font-bold">{text} </p>
        <p>홈으로 이동합니다.</p>
        <Button
          text="이동하기"
          onClick={() => {
            close();
            navigate('/');
          }}
        />
        <button aria-label="모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="모달 닫기" />
        </button>
      </section>
    </ModalOverlay>
  );
}
