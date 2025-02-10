import ModalOverlay from '../ModalOverlay';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';

export default function LinkModal({
  isOpen,
  close,
  currentPoint,
  text,
  navigate,
}: {
  isOpen: boolean;
  close: () => void;
  currentPoint: {
    need: number;
    now: number;
  };
  text: string;
  navigate: (path: string) => void;
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <section className="modal-container h-[267px]">
        <p className="text-main mb-4 font-bold">{text} </p>
        <div className="mb-1 flex w-full items-center justify-between">
          <p>
            현재 보유한 포인트<span className="text-main ml-1 font-medium">{currentPoint.now.toLocaleString()} P</span>
          </p>
          <p>
            가입 시 필요한 포인트
            <span className="text-main ml-1 font-medium">{currentPoint.need.toLocaleString()} P</span>
          </p>
          <p>
            필요한 포인트
            <span className="text-main ml-1 font-medium">
              {(currentPoint.need - currentPoint.now).toLocaleString()} P
            </span>
          </p>
        </div>
        <Button
          text="확인"
          onClick={() => {
            close();
            navigate('/');
          }}
        />
        <button aria-label="포인트 출금 모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="포인트 출금 모달 닫기" />
        </button>
      </section>
    </ModalOverlay>
  );
}
