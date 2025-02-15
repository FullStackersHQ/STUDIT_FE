import {
  DailyStudyDataType,
  DailyTodoType,
  UpdatedWeeklyDataItem,
  WeeklyStudyDataType,
} from '../../../types/staticInterface';
import { timeStringToDecimal } from '../../../utils/commonUtils';
import UserDailyGraph from './UserDailyGraph';
import UserWeeklyGraph from './UserWeeklyGraph';

// Sample data
const dailyStudyData: DailyStudyDataType = {
  dailyTotalStudyTime: '06:30',
  todos: [
    { todo: '할일1', time: '03:00' },
    { todo: '할일2', time: '01:30' },
    { todo: '할일3', time: '02:00' },
  ],
};

// Sample data
const weeklyStudyData: WeeklyStudyDataType = {
  weeklyAverageStudyTime: '06:30',
  todoList: ['할일1', '할일1_1', '할일1_2', '할일2', '할일2_1', '할일2_3', '할일3'],
  weeklyData: [
    {
      day: '2025-02-17',
      record: {
        할일1: '02:00',
        할일1_1: '01:30',
        할일1_2: '03:00',
      },
    },
    {
      day: '2025-02-18',
      record: {
        할일1: '01:00',
        할일1_1: '02:00',
        할일2: '02:30',
      },
    },
    {
      day: '2025-02-19',
      record: {
        할일2: '02:30',
        할일2_1: '01:13',
        할일2_3: '02:00',
      },
    },
    {
      day: '2025-02-20',
      record: {
        할일1: '03:50',
        할일2: '01:30',
        할일3: '02:00',
      },
    },
  ],
};

export default function UserGraph() {
  // 일일 공부 시간 비율
  const dailyStudyRatio: { todo: string; value: number }[] = dailyStudyData.todos.map((item: DailyTodoType) => ({
    todo: item.todo,
    value: timeStringToDecimal(item.time),
  }));

  const updatedWeeklyData: UpdatedWeeklyDataItem[] = weeklyStudyData.weeklyData.map((entry) => {
    // 각 할일 시간을 소수점 시간으로 변환
    const updatedRecord = Object.keys(entry.record).reduce<Record<string, number>>((acc, key) => {
      acc[key] = timeStringToDecimal(entry.record[key]);
      return acc;
    }, {});

    // 변환된 데이터 객체 반환
    return {
      day: entry.day,
      totalTime: Object.values(updatedRecord).reduce((acc, value) => acc + value, 0),
      ...updatedRecord,
    };
  });

  // 평균 시간 계산
  console.log('dailyStudy', dailyStudyRatio);
  console.log('weekStudy', updatedWeeklyData);

  return (
    <>
      <UserDailyGraph dailyData={dailyStudyRatio} totalTime={dailyStudyData.dailyTotalStudyTime} />
      <UserWeeklyGraph todoList={weeklyStudyData.todoList} weeklyData={updatedWeeklyData} />
    </>
  );
}
