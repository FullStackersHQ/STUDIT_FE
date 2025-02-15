import { Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { decimalToTimeString } from '../../../utils/commonUtils';
import { COLORS } from '../../../constants/constants';
import { UpdatedWeeklyDataItem } from '../../../types/staticInterface';
import React from 'react';

function UserWeeklyGraph({ weeklyData, todoList }: { weeklyData: UpdatedWeeklyDataItem[]; todoList: string[] }) {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold">일별 공부 시간</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyData} margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 16]} />
          <Tooltip
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const { payload: tooltipData } = payload[0];
              return (
                <div className="custom-tooltip">
                  <p>{`Day: ${tooltipData.day}`}</p>
                  {Object.keys(tooltipData)
                    .filter((key) => key !== 'day' && key !== 'totalTime')
                    .map((key) => {
                      const timeStr = decimalToTimeString(tooltipData[key]);
                      return (
                        <p key={key} className="tooltip-item">
                          {`${key}: ${timeStr}`}
                        </p>
                      );
                    })}
                </div>
              );
            }}
          />
          <Legend />

          {/* todoList 배열을 사용하여 각 항목에 대해 누적 막대 그래프 생성 */}
          {todoList.map((todo, index) => {
            return (
              <Bar
                key={todo}
                dataKey={todo}
                stackId="a"
                fill={COLORS[index % COLORS.length]} // 색상 설정
                name={todo} // 이름 표시
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default React.memo(UserWeeklyGraph);
