import { Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, ReferenceLine } from 'recharts';
import { decimalToTimeString } from '../../../utils/commonUtils';
import { COLORS } from '../../../constants/constants';
import { UpdatedWeeklyDataItem } from '../../../types/staticInterface';
import React from 'react';

function UserWeeklyGraph({ weeklyData }: { weeklyData: UpdatedWeeklyDataItem[] }) {
  const getDayOfWeek = (dateStr: string) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date(dateStr);
    return daysOfWeek[date.getDay()];
  };

  // 데이터를 변환하여 요일 필드를 추가
  const transformedData = weeklyData.map((entry) => ({
    ...entry,
    dayOfWeek: getDayOfWeek(entry.day),
  }));

  const sortedByTotalTime = [...weeklyData].sort((a, b) => a.totalTime - b.totalTime);

  const weeklySumTime = transformedData.reduce((sum, entry) => sum + entry.totalTime, 0);
  const weeklyAverageTime = weeklySumTime / transformedData.length;
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold">일별 공부 시간</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={transformedData}>
          <XAxis dataKey="dayOfWeek" />
          <YAxis
            domain={[0, 16]}
            label={{ value: '공부 시간', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}
          />
          <Tooltip
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const { payload: tooltipData } = payload[0];
              return (
                <div className="custom-tooltip">
                  <p>{`Day: ${tooltipData.day}`}</p>
                  {Object.keys(tooltipData)
                    .filter((key) => key !== 'day' && key !== 'totalTime' && key !== 'dayOfWeek')
                    .map((key, index) => {
                      const timeStr = decimalToTimeString(tooltipData[key]);
                      const color = COLORS[index % COLORS.length];
                      return (
                        <p key={key} style={{ color }}>
                          {`${key}: ${timeStr}`}
                        </p>
                      );
                    })}
                </div>
              );
            }}
          />
          <Legend verticalAlign="top" iconType="circle" iconSize={12} height={40} wrapperStyle={{ fontSize: '12px' }} />

          <Bar dataKey="totalTime" fill="#39cccc" name="총 공부 시간" barSize={30} />
          <ReferenceLine
            y={weeklyAverageTime}
            stroke="#FF6347"
            isFront
            strokeDasharray="4 4"
            label={{ value: `평균 ${decimalToTimeString(weeklyAverageTime)}`, position: 'top' }}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-col items-end justify-center">
        <p className="text-sm">{`총 공부 시간 : ${decimalToTimeString(weeklySumTime)}`}분</p>
        <p className="text-sm">{`최저 공부 시간 : ${decimalToTimeString(sortedByTotalTime[0].totalTime)}`}분</p>
        <p className="text-sm">
          {`최고 공부 시간 : ${decimalToTimeString(sortedByTotalTime[sortedByTotalTime.length - 1].totalTime)}`}분
        </p>
      </div>
    </>
  );
}

export default React.memo(UserWeeklyGraph);
