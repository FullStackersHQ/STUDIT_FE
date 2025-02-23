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
  day: string;
  totalTime: number;
  [key: string]: string | number;
}
