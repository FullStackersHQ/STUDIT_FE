import useTodoList from '../../hooks/study-main/useTodoList';
import PlayIcon from '../../assets/icons/play.svg';
import CloseIcon from '../../assets/icons/close.svg';

export default function TodoListSection({ studyId }: { studyId: number }) {
  const {
    todoList,
    todoListLoading,
    todoStates,
    isAdding,
    setIsAdding,
    newTodo,
    setNewTodo,
    handleKeyDown,
    startEditing,
    isEditing,
    saveEdit,
    editingTodo,
    setEditingTodo,
    handleCheckboxChange,
  } = useTodoList(studyId);

  if (!todoList || todoListLoading) return null;
  const { studyTotalTime, todos } = todoList;

  return (
    <section className="mt-3 px-4">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">
          총 스터디 시간: <span className="font-bold">{studyTotalTime}</span>
        </h1>
        <button className="btn-sm" onClick={() => setIsAdding(true)}>
          투두 추가
        </button>
      </div>
      <ul className="mt-3 flex flex-col gap-y-2">
        {isAdding && (
          <li className="flex items-center gap-x-2.5">
            <div className="flex items-center gap-x-1.5">
              <div className="border-white-gray h-[18px] w-[18px] rounded-sm border-2" />
              <input
                type="text"
                value={newTodo}
                placeholder="생성할 투두 입력해주세요."
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyDown}
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
        )}
        {todos.map((todo) => {
          const { todoId, todoName, totalStudyTime } = todo;

          return (
            <li key={todoId} className="flex items-center justify-between">
              <div className="flex items-center gap-x-1.5">
                {isEditing && editingTodo.todoId === todoId ? (
                  <div className="flex w-full items-center gap-x-1.5">
                    <button
                      className="text-dark-gray hover:text-gray cursor-pointer transition-colors"
                      onClick={() => setEditingTodo(() => ({ isCompleted: false, todoName: '', todoId: 1 }))}
                      aria-label="투두 수정 취소"
                    >
                      <CloseIcon className="h-3.5 w-3.5" alt="투두 수정 취소" />
                    </button>
                    <input
                      type="text"
                      value={editingTodo.todoName}
                      onChange={(e) => setEditingTodo((prev) => ({ ...prev, todoName: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit();
                      }}
                      autoFocus
                      className="border-main max-w-[196px] border-b p-1 text-sm"
                    />
                  </div>
                ) : (
                  <>
                    <input
                      onChange={() => handleCheckboxChange(todoId, !todoStates[todoId])}
                      checked={todoStates[todoId] || false}
                      type="checkbox"
                      className="checked:bg-main border-white-gray relative h-[18px] w-[18px] appearance-none rounded-sm border-2 checked:border-transparent checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white checked:after:content-['✓']"
                    />
                    <button
                      className="line-clamp-2 max-w-[196px] text-sm"
                      onClick={() => startEditing(todoId, todoName)}
                    >
                      {todoName}
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center gap-x-2">
                <span className="text-sm font-medium">{totalStudyTime}</span>
                <PlayIcon alt={`${todoName} 타이머 재생`} className="h-10 w-10" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
