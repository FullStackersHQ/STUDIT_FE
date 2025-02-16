import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { decimalToTimeString } from '../../../utils/commonUtils';
import { COLORS } from '../../../constants/constants';
import React from 'react';

function UserDailyGraph({ dailyData, totalTime }: { dailyData: { todo: string; value: number }[]; totalTime: string }) {
  const today = new Date().toISOString().split('T')[0];

  const renderCustomLabel = (data: { todo: string; value: number }) => {
    const percentage = ((data.value / dailyData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(0);
    return `${percentage}%`;
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">{today} 공부 기록</h2>
      <ResponsiveContainer className="border-white-gray mb-4 border" width="100%" height={300}>
        <PieChart>
          <Pie
            data={dailyData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            label={renderCustomLabel}
            labelLine={false}
          >
            {dailyData.map((entry, index) => (
              <Cell key={`cell-${entry.todo}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="16px">
            공부시간: {totalTime}
          </text>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-col items-start">
        {dailyData.map((data, index) => {
          const percentage = ((data.value / dailyData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(0);
          return (
            <div key={index} className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span className="text-base font-medium">{data.todo}</span>
              <span className="text-sm text-gray-600">
                {decimalToTimeString(data.value)} · {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(UserDailyGraph);
