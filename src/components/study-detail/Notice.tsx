import { overlay } from 'overlay-kit';
import NoticeModal from './NoticeModal';
import useGetNotice from '../../hooks/study-main/useGetNotice';
import NoticeIcon from '../../assets/icons/notice.svg';

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
        className="flex w-full cursor-pointer items-center gap-x-1 truncate rounded-sm bg-black p-1.5 text-sm overflow-ellipsis text-white"
      >
        <NoticeIcon alt="공지" />
        <span className="font-medium">공지:</span> {notice.content}
      </button>
    </section>
  );
}
