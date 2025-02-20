import { GroupedByDate, IUserPoints } from '../../types/interface';

export const allPointRecords: GroupedByDate[] = [
  {
    date: '2024.02.09',
    records: [
      {
        id: 5,
        type: '차감',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 4,
        type: '출금',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.01.30',
    records: [
      {
        id: 3,
        type: '충전',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.01.09',
    records: [
      {
        id: 2,
        type: '차감',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.01.08',
    records: [
      {
        id: 1,
        type: '충전',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
  {
    date: '2024.02.07',
    records: [
      {
        id: 6,
        type: '출금',
        amount: 25000,
        total_after: 40000,
        time: '12:00:00',
      },
      {
        id: 7,
        type: '보상',
        amount: 5000,
        total_after: 45000,
        time: '15:30:00',
      },
    ],
  },
  {
    date: '2024.01.25',
    records: [
      {
        id: 8,
        type: '충전',
        amount: 20000,
        total_after: 60000,
        time: '08:45:00',
      },
      {
        id: 9,
        type: '차감',
        amount: 5000,
        total_after: 55000,
        time: '17:10:00',
      },
      {
        id: 10,
        type: '환불',
        amount: 6000,
        total_after: 49000,
        time: '18:20:00',
      },
    ],
  },
  {
    date: '2024.01.20',
    records: [
      {
        id: 11,
        type: '환불',
        amount: 7000,
        total_after: 43000,
        time: '13:05:00',
      },
      {
        id: 12,
        type: '차감',
        amount: 3000,
        total_after: 40000,
        time: '16:25:00',
      },
    ],
  },
  {
    date: '2024.01.15',
    records: [
      {
        id: 13,
        type: '출금',
        amount: 10000,
        total_after: 20000,
        time: '09:30:00',
      },
      {
        id: 14,
        type: '보상',
        amount: 8000,
        total_after: 28000,
        time: '14:00:00',
      },
    ],
  },
  {
    date: '2024.01.10',
    records: [
      {
        id: 15,
        type: '충전',
        amount: 40000,
        total_after: 90000,
        time: '11:00:00',
      },
    ],
  },
  {
    date: '2024.01.05',
    records: [
      {
        id: 16,
        type: '환불',
        amount: 6000,
        total_after: 24000,
        time: '10:00:00',
      },
    ],
  },
];

export const toppedUpPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '충전',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '충전',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '충전',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '충전',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '충전',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];

export const deductedPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '차감',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '차감',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '차감',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '차감',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '차감',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];

export const withDrawnPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '출금',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '출금',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '출금',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '출금',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '출금',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];

export const rewardPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '보상',
        amount: 15000,
        total_after: 85000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '보상',
        amount: 20000,
        total_after: 70000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '보상',
        amount: 30000,
        total_after: 50000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '보상',
        amount: 10000,
        total_after: 20000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '보상',
        amount: 10000,
        total_after: 10000,
        time: '10:30:00',
      },
    ],
  },
];

export const refundPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '환불',
        amount: 15000,
        total_after: 20000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '환불',
        amount: 20000,
        total_after: 35000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '환불',
        amount: 30000,
        total_after: 55000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '환불',
        amount: 10000,
        total_after: 85000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '환불',
        amount: 50000,
        total_after: 95000,
        time: '10:30:00',
      },
    ],
  },
];

export const userPoints: IUserPoints = {
  totalPoints: 50000,
  totalRewardPoints: 70000,
  totalDeductedPoints: 15000,
  totalWithdrawnPoints: 5000,
};
