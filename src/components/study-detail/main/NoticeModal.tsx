import ModalOverlay from '../../ModalOverlay';
import CloseIcon from '../../../assets/icons/close.svg';
import { NoticeType } from '../../../types/interface';
import { formatDate } from '../../../utils/commonUtils';
import NoticeIcon from '../../../assets/icons/notice.svg';

export default function NoticeModal({
  isOpen,
  close,
  notice,
}: {
  isOpen: boolean;
  close: () => void;
  notice: NoticeType;
}) {
  if (!isOpen || !notice) return null;

  return (
    <ModalOverlay>
      <section className="relative flex w-[343px] flex-col items-center rounded-md bg-black p-4 text-white">
        <div className="mb-.35 mb-3.5 flex items-center gap-x-1">
          <NoticeIcon alt="공지" />
          <p className="font-bold">스터디장이 전해요</p>
        </div>
        <p className="border-main min-h-20 w-full rounded border p-2 text-sm">{notice.content}</p>
        <span className="mt-2 self-end text-xs">{formatDate(notice.created)}</span>
        <button aria-label="공지 모달 닫기" className="close-position" onClick={() => close()}>
          <CloseIcon className="close-btn" alt="공지 모달 닫기" />
        </button>
      </section>
    </ModalOverlay>
  );
}
