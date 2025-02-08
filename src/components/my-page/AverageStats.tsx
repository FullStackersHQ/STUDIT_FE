import { AvgStats } from '../../types/interface';
import { BarChart, Bar } from 'recharts';
import { convertToPercent, convertToHHMM } from '../../utils/commonUtils';

export default function AverageStats({ averageStats, nickName }: { averageStats: AvgStats; nickName: string }) {
  const { averageTodoCompletion, userTodoCompletion, userStudyTime, averageStudyTime } = averageStats;
  const todoData = [
    {
      value1: averageTodoCompletion,
      value2: userTodoCompletion,
    },
  ];
  const studyTimeData = [
    {
      value1: convertToPercent(averageStudyTime),
      value2: convertToPercent(userStudyTime),
    },
  ];
  const todoDiff = Math.abs(averageTodoCompletion - userTodoCompletion);
  const studyTimeDiff = convertToHHMM(Math.abs(averageStudyTime - userStudyTime));

  const todoComparison = averageTodoCompletion - userTodoCompletion;
  const studyTimeComparison = averageStudyTime - userStudyTime;

  return (
    <section className="text-sm">
      <p className="mb-2.5 font-medium">지난 일주일 동안 {nickName}님은 다른 사용자들보다</p>
      <div className="flex gap-x-5">
        <div className="border-white-gray relative flex h-[152px] w-[152px] grow flex-col items-center justify-center rounded-lg border">
          <BarChart data={todoData} width={52} height={100}>
            <Bar dataKey="value1" className="fill-white-gray" radius={[2, 2, 0, 0]} />
            <Bar dataKey="value2" className="fill-main" radius={[2, 2, 0, 0]} />
          </BarChart>
          <p className="text-center">
            <span className="text-main font-bold">{todoDiff}% </span>
            {todoComparison < 0 ? '더 많은' : '더 적은'}
            <br /> 투두를 완료했어요
          </p>
        </div>
        <div className="border-white-gray relative flex h-[152px] w-[152px] grow flex-col items-center justify-center rounded-lg border">
          <BarChart data={studyTimeData} width={52} height={100}>
            <Bar dataKey="value1" className="fill-white-gray" radius={[2, 2, 0, 0]} />
            <Bar dataKey="value2" className="fill-main" radius={[2, 2, 0, 0]} />
          </BarChart>
          <p className="text-center">
            <span className="text-main font-bold">{studyTimeDiff} </span> <br />
            {studyTimeComparison < 0 ? '더 많이 ' : '더 적게 '}
            스터디 했어요
          </p>
        </div>
      </div>
    </section>
  );
}
