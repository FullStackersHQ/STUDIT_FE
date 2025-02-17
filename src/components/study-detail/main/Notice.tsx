import { overlay } from 'overlay-kit';
import NoticeModal from './NoticeModal';
import useGetNotice from '../../../hooks/study-detail/useGetNotice';
import NoticeIcon from '../../../assets/icons/notice.svg';

export default function Notice({ studyId, hasNotice }: { studyId: number; hasNotice: boolean }) {
  const { notice, isLoading } = useGetNotice(studyId, hasNotice);
  if (!hasNotice || !notice || isLoading) return null;
  const openNoticeModal = () => {
    overlay.open(({ isOpen, close }) => {
      return <NoticeModal isOpen={isOpen} close={close} notice={notice} />;
    });
  };
  return (
    <section className="mt-2 px-4">
      <button
        onClick={openNoticeModal}
        className="flex w-full cursor-pointer items-center gap-x-1 rounded-sm bg-black p-1.5 text-sm text-white"
      >
        <NoticeIcon alt="공지" className="h-5 w-5 flex-shrink-0" />
        <div className="flex w-full gap-x-1 truncate overflow-hidden">
          <span className="flex-shrink-0 font-medium">공지:</span>
          <span className="truncate">{notice.content}</span>
        </div>
      </button>
    </section>
  );
}
