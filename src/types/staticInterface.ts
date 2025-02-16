export interface DailyTodoType {
  todo: string;
  time: string;
}

export interface DailyStudyDataType {
  dailyTotalStudyTime: string;
  todos: DailyTodoType[];
}

export interface TodoRecord {
  [key: string]: string;
}

export interface WeeklyDataItemType {
  day: string;
  record: TodoRecord;
}

export interface WeeklyStudyDataType {
  weeklyAverageStudyTime: string;
  todoList: string[];
  weeklyData: WeeklyDataItemType[];
}

export interface UpdatedWeeklyDataItem {
  day: string; // 날짜 (YYYY-MM-DD 형식)
  totalTime: number; // 해당 날짜의 총 공부 시간 (소수점으로 표시)
  [key: string]: string | number; // 동적 키: 할일과 그에 대한 공부 시간
}
