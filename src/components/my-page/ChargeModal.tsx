import ModalOverlay from '../ModalOverlay';
import Input from '../Input';
import CloseIcon from '../../assets/icons/close.svg';
import useChargeModal from '../../hooks/my-page/useChargeModal';
import { handleKeyDown } from '../../utils/commonUtils';
import Button from '../Button';

export default function ChargeModal({
  isOpen,
  close,
  currentPoint,
  userId,
}: {
  isOpen: boolean;
  close: () => void;
  currentPoint: number;
  userId: number;
}) {
  const { inputPoint, setInputPoint, shaking, handleInput } = useChargeModal(close, userId);
  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <section className="modal-container">
        <p className="text-main-text mb-3.5 font-bold">포인트를 충전해요</p>
        <p className="mb-1 self-start">
          현재 보유한 포인트<span className="text-main-text ml-1 font-medium">{currentPoint.toLocaleString()} P</span>{' '}
        </p>
        <div className="mb-3 flex w-full flex-col gap-y-2">
          <label htmlFor="chargePoint">충전할 포인트</label>
          <Input
            id="chargePoint"
            value={inputPoint.toLocaleString()}
            placeholder="충전할 포인트"
            onChange={(e) => {
              const rawValue = e.target.value.replace(/,/g, '');
              setInputPoint(Number(rawValue) || 0);
            }}
            onKeyDown={(e) => handleKeyDown(e, () => handleInput())}
          />
          <p className={`text-deduct text-xs font-medium ${shaking ? 'shake' : ''}`}>*충전은 100P 단위로 가능해요</p>
        </div>
        <Button text="충전하기" onClick={handleInput} />
        <button aria-label="포인트 충전 모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="포인트 충전 모달 닫기" />
        </button>
      </section>
    </ModalOverlay>
  );
}
