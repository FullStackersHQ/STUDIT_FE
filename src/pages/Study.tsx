import Notice from '../components/study-detail/Notice';
import TodoListSection from '../components/study-detail/TodoListSection';

export default function Study({ studyId, hasNotice }: { studyId: number; hasNotice: boolean }) {
  return (
    <div>
      <Notice studyId={studyId} hasNotice={hasNotice} />
      <div className="bg-main mt-[302px] h-1.5 w-full" />
      <TodoListSection studyId={studyId} />
    </div>
  );
}
