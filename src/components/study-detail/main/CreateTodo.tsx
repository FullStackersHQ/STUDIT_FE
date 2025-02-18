import CloseIcon from '../../../assets/icons/close.svg';

export default function CreateTodo({
  newTodo,
  setNewTodo,
  setIsAdding,
  handleKeyDown,
}: {
  newTodo: string;
  setNewTodo: (prev: string) => void;
  setIsAdding: (prev: boolean) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <li className="flex items-center gap-x-2.5">
      <div className="flex items-center gap-x-1.5">
        <div className="border-white-gray h-[18px] w-[18px] rounded-sm border-2" />
        <input
          type="text"
          value={newTodo}
          placeholder="생성할 투두 입력후 Enter"
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
          className="border-main w-[196px] border-b p-1"
        />
      </div>
      <button
        className="text-dark-gray hover:text-gray cursor-pointer transition-colors"
        onClick={() => setIsAdding(false)}
        aria-label='lt="투두 생성 취소" '
      >
        <CloseIcon alt="투두 생성 취소" className="h-3 w-3" />
      </button>
    </li>
  );
}
