import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { decimalToTimeString } from '../../../utils/commonUtils';
import { COLORS } from '../../../constants/constants';
import React from 'react';

function UserDailyGraph({ dailyData, totalTime }: { dailyData: { todo: string; value: number }[]; totalTime: string }) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <h2 className="text-lg font-semibold">{today} 공부 기록</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dailyData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            label={(entry) => `${entry.todo}-${decimalToTimeString(entry.value.toFixed(2))}`}
          >
            {dailyData.map((entry, index) => (
              <Cell key={`cell-${entry.todo}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="16px" fontWeight="bold">
            공부시간: {totalTime}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default React.memo(UserDailyGraph);
