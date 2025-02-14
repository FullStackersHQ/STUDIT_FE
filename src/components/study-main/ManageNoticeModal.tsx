import ModalOverlay from '../ModalOverlay';
import Button from '../Button';
import CloseIcon from '../../assets/icons/close.svg';
import { handleKeyDown, handleMaxLengthChange } from '../../utils/commonUtils';
import useNoticeModal from '../../hooks/study-main/useNoticeModal';

export default function ManageNoticeModal({
  isOpen,
  close,
  studyId,
  hasNotice,
}: {
  isOpen: boolean;
  close: () => void;
  studyId: number;
  hasNotice: boolean;
}) {
  const { isLoading, input, setInput, handleClick } = useNoticeModal(studyId, hasNotice, close);
  if (!isOpen || isLoading) return null;

  return (
    <ModalOverlay>
      <section className="modal-container">
        <p className="text-main-text font-bold">공지를 {hasNotice ? '수정' : '등록'}해요</p>
        <textarea
          value={input}
          onChange={(e) => handleMaxLengthChange(e, 250, () => setInput(e.target.value))}
          className="text-input mt-3.5 h-[200px] w-full rounded text-sm"
          onKeyDown={(e) => handleKeyDown(e, handleClick)}
        />
        <span className="mt-1 mb-4 self-end text-xs">{input.length}/200</span>
        <Button text={`${hasNotice ? '수정하기' : '등록하기'}`} onClick={handleClick} />
        <button
          aria-label={`${hasNotice ? '공지 수정하기 모달 닫기' : '공지 등록하기 모달 닫기'}`}
          className="close-position"
          onClick={() => close()}
        >
          <CloseIcon
            className="close-btn"
            alt={`${hasNotice ? '공지 수정하기 모달 닫기' : '공지 등록하기 모달 닫기'}`}
          />
        </button>
      </section>
    </ModalOverlay>
  );
}
