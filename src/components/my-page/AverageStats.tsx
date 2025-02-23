import { AvgStats } from '../../types/interface';
import { BarChart, Bar } from 'recharts';
import ThreeDotsLoader from './ThreeDotsLoader';

export default function AverageStats({ averageStats, nickName }: { averageStats: AvgStats; nickName: string }) {
  const { averageTodoCompletion, userTodoCompletion, userGoalRate, averageGoalRate } = averageStats;
  const todoData = [
    {
      value1: averageTodoCompletion,
      value2: userTodoCompletion || 0,
    },
  ];
  const studyTimeData = [
    {
      value1: averageGoalRate,
      value2: userGoalRate || 0,
    },
  ];
  const todoDiff = Math.abs(averageTodoCompletion - (userTodoCompletion || 0));
  const studyTimeDiff = Math.abs(averageGoalRate - (userGoalRate || 0));

  const todoComparison = averageTodoCompletion - (userTodoCompletion || 0);
  const studyTimeComparison = averageGoalRate - (userGoalRate || 0);

  return (
    <section className="text-sm">
      <p className="mb-2.5 font-medium">지난 일주일 동안 {nickName}님은 다른 사용자들보다</p>
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-y-1">
          <div className="border-white-gray relative flex h-[152px] w-[152px] grow flex-col items-center justify-center rounded-lg border">
            {userTodoCompletion ? (
              <>
                <BarChart data={todoData} width={52} height={100}>
                  <Bar dataKey="value1" className="fill-white-gray" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="value2" className="fill-main" radius={[2, 2, 0, 0]} />
                </BarChart>
                <p className="text-center">
                  <span className="text-main-text font-bold">{todoDiff}% </span>
                  {todoComparison < 0 ? '더 많은' : '더 적은'}
                  <br /> 투두를 완료했어요
                </p>
              </>
            ) : (
              <div className={`flex flex-col items-center gap-y-12 ${!userGoalRate && 'mt-8'}`}>
                <ThreeDotsLoader />
                <p className="text-center">
                  데이터가 <br />
                  쌓이는 중이에요
                </p>
              </div>
            )}
          </div>
          {userTodoCompletion && (
            <p>
              나의 투두 달성률: <span className="text-main-text font-bold">{userTodoCompletion}%</span>
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <div className="border-white-gray relative flex h-[152px] w-[152px] grow flex-col items-center justify-center rounded-lg border">
            {userGoalRate ? (
              <>
                <BarChart data={studyTimeData} width={52} height={100}>
                  <Bar dataKey="value1" className="fill-white-gray" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="value2" className="fill-main" radius={[2, 2, 0, 0]} />
                </BarChart>
                <p className="text-center">
                  <span className="text-main-text font-bold">{studyTimeDiff}% </span>
                  {studyTimeComparison < 0 ? '더 ' : '적게 '} 목표 시간을
                  <br />
                  달성 했어요
                </p>
              </>
            ) : (
              <div className={`flex flex-col items-center gap-y-12 ${!userGoalRate && 'mt-8'}`}>
                <ThreeDotsLoader />
                <p className="text-center">
                  데이터가 <br />
                  쌓이는 중이에요
                </p>
              </div>
            )}
          </div>
          {userGoalRate && (
            <p>
              나의 목표 시간 달성률: <span className="text-main-text font-bold">{userGoalRate}%</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
