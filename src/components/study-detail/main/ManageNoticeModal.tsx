import ModalOverlay from '../../ModalOverlay';
import Button from '../../Button';
import CloseIcon from '../../../assets/icons/close.svg';
import { handleMaxLengthChange } from '../../../utils/commonUtils';
import NoticeIcon from '../../../assets/icons/notice.svg';
import useManageModal from '../../../hooks/study-detail/useManageModal';

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
  const { isLoading, input, setInput, editNotice, createNotice, deleteNotice } = useManageModal(
    studyId,
    hasNotice,
    close,
  );
  if (!isOpen || isLoading) return null;

  return (
    <ModalOverlay>
      <section className="modal-container">
        <div className="flex items-center gap-x-1">
          <NoticeIcon alt="공지" />
          <p className="text-main-text font-bold">공지를 {hasNotice ? '수정 또는 삭제' : '등록'}해요</p>
        </div>
        <textarea
          value={input}
          onChange={(e) => handleMaxLengthChange(e, 250, () => setInput(e.target.value))}
          className="text-input mt-3.5 h-[200px] w-full rounded text-sm"
        />
        <span className="mt-1 mb-3.5 self-end text-xs">{input.length}/200</span>
        {!hasNotice ? (
          <Button text="등록하기" onClick={() => createNotice()} />
        ) : (
          <div className="flex items-center gap-x-2">
            <button
              className="ext-dark-gray bg-white-gray hover:bg-light-gray hover:text-dark-gray cursor-pointer rounded-md px-2.5 py-1.5 font-medium transition-colors"
              onClick={() => deleteNotice()}
            >
              삭제하기
            </button>
            <button
              className="bg-main hover:bg-main-hover cursor-pointer rounded-md px-2.5 py-1.5 font-medium text-white transition-colors"
              onClick={() => editNotice()}
            >
              수정하기
            </button>
          </div>
        )}
        <button
          aria-label={`${hasNotice ? '공지 관리하기 모달 닫기' : '공지 등록하기 모달 닫기'}`}
          className="close-position"
          onClick={() => close()}
        >
          <CloseIcon
            className="close-btn"
            alt={`${hasNotice ? '공지 관리하기 모달 닫기' : '공지 등록하기 모달 닫기'}`}
          />
        </button>
      </section>
    </ModalOverlay>
  );
}
