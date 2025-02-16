import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { decimalToTimeString, timeStringToDecimal } from '../../../utils/commonUtils';

interface GroupDataItem {
  user: string;
  time: string;
}

interface GroupDataType {
  averageTime: string;
  goalTIme: string;
  group: GroupDataItem[];
}

const groupData: GroupDataType = {
  averageTime: '19:40',
  goalTIme: '30:00',
  group: [
    { user: 'User A', time: '15:13' },
    { user: 'User B', time: '38:59' },
    { user: 'User C', time: '12:33' },
    { user: 'My Record', time: '21:41' },
    { user: 'User D', time: '08:53' },
  ],
};

export default function GroupGraph() {
  const groupStudyRatio: { user: string; time: number; timeLabel: string }[] = groupData.group
    .map((item: GroupDataItem) => ({
      user: item.user,
      time: timeStringToDecimal(item.time),
      timeLabel: item.time,
    }))
    .sort((a, b) => b.time - a.time);

  const renderLabel = ({ y, value, height }: { y: number; value: number; height: number }) => {
    const textY = Number(y) + Number(height) / 2;
    return (
      <text x={70} y={textY} fill={'#fff'} dominantBaseline="central" fontSize={12}>
        {decimalToTimeString(value)}
      </text>
    );
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 text-lg font-semibold">총 공부 시간 랭킹</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={groupStudyRatio} barSize={20}>
          <XAxis type="number" domain={[0, 'dataMax']} />
          <YAxis type="category" dataKey="user" />
          <Tooltip />
          <Bar dataKey="time" label={renderLabel}>
            {groupStudyRatio.map((entry) => (
              <Cell
                key={`cell-${entry.user}`}
                fill={entry.user === 'My Record' ? '#39cccc' : '#616161'} // 'My Record'는 다른 색상
              />
            ))}
          </Bar>
          <ReferenceLine
            x={timeStringToDecimal(groupData.averageTime)}
            stroke="#FF6347"
            strokeDasharray="3 3"
            label={{
              value: `평균`,
              position: 'insideBottom',
              fill: '#00b5b5',
            }}
          />
          <ReferenceLine
            x={timeStringToDecimal(groupData.goalTIme)}
            stroke="#03a6ff"
            strokeDasharray="3 3"
            label={{
              value: `목표`,
              position: 'insideBottom',
              fill: '#00b5b5',
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
