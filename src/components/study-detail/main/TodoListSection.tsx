import useTodoList from '../../../hooks/study-detail/todo/useTodoList';
import PlayIcon from '../../../assets/icons/play.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import PauseIcon from '../../../assets/icons/pause.svg';
import CreateTodo from './CreateTodo';
import useTodoActions from '../../../hooks/study-detail/todo/useTodoActions';
import { TodoType, TimerType } from '../../../types/interface';
import { formatTime } from '../../../utils/commonUtils';
import useTodoTimer from '../../../hooks/study-detail/todo/useTodoTimer';
import { Dispatch, SetStateAction } from 'react';

export default function TodoListSection({
  studyId,
  userId,
  setTimers,
}: {
  studyId: number;
  userId: number;
  setTimers: Dispatch<SetStateAction<TimerType[]>>;
}) {
  const { todoList, todoListLoading, todoStates, handleCheckboxChange, setLocalTodoList } = useTodoList(studyId);
  const {
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
  } = useTodoActions(studyId);
  const { startTimer, stopTimer, activeTodoId } = useTodoTimer({ studyId, userId, setTimers, setLocalTodoList });
  if (todoListLoading || !todoList || !todoList.todos) return null;
  const { studyTotalTime, todos } = todoList;

  return (
    <section className="px-4">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">
          총 스터디 시간: <span className="font-bold">{formatTime(studyTotalTime)}</span>
        </h1>
        <button className="btn-sm" onClick={() => setIsAdding(true)}>
          투두 추가
        </button>
      </div>
      <ul className="mt-3 flex flex-col gap-y-2">
        {isAdding && (
          <CreateTodo
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            setIsAdding={setIsAdding}
            handleKeyDown={handleKeyDown}
          />
        )}
        {todos.map((todo: TodoType) => {
          const { todoId, todoName, studyTime } = todo;

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
                <span className="text-sm font-medium">{formatTime(studyTime)}</span>
                <button
                  onClick={() => {
                    if (activeTodoId === todoId) stopTimer(todoId);
                    else startTimer(todoId);
                  }}
                >
                  {activeTodoId === todoId ? (
                    <PauseIcon alt={`${todoName} 타이머 정지`} className="h-10 w-10" />
                  ) : (
                    <PlayIcon alt={`${todoName} 타이머 재생`} className="h-10 w-10" />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
