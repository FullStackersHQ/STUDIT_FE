import ModalOverlay from '../ModalOverlay';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';
import { handleKeyDown } from '../../utils/commonUtils';
import useWithdrawModal from '../../hooks/point/useWithdrawModal';

export default function WithdrawModal({
  isOpen,
  close,
  currentPoint,
}: {
  isOpen: boolean;
  close: () => void;
  currentPoint: number;
}) {
  const { inputPoint, setInputPoint, shaking, handleInput, notification } = useWithdrawModal(close, currentPoint);
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <section className="modal-container h-[267px]">
        <p className="text-main mb-4 font-bold">포인트를 출금해요</p>
        <div className="mb-1 flex w-full items-center justify-between">
          <p>
            현재 보유한 포인트<span className="text-main ml-1 font-medium">{currentPoint.toLocaleString()} P</span>
          </p>
          <button className="btn-sm" onClick={() => setInputPoint(currentPoint)}>
            전체 적용
          </button>
        </div>
        <div className="mb-3 flex w-full flex-col gap-y-2">
          <p>출금할 포인트</p>
          <input
            type="text"
            placeholder="출금할 포인트"
            value={inputPoint.toLocaleString()}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/,/g, '');
              setInputPoint(Number(rawValue) || 0);
            }}
            className="border-light-gray rounded border p-2"
            onKeyDown={(e) => handleKeyDown(e, () => handleInput())}
          />
          <p className={`text-deduct text-xs ${shaking ? 'shake' : ''}`}>{notification}</p>
        </div>
        <Button text="출금하기" onClick={handleInput} />
        <button aria-label="포인트 출금 모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="포인트 출금 모달 닫기" />
        </button>
      </section>
    </ModalOverlay>
  );
}
