import { http, HttpResponse } from 'msw';
import {
  userPoints,
  allPointRecords,
  toppedUpPoints,
  deductedPoints,
  withDrawnPoints,
  refundPoints,
  rewardPoints,
} from './data/dummy';
import { PointFilterType } from '../types/interface';
import { WithdrawRequest } from '../types/request';

const pointHandlers = [
  http.get('/point', () => {
    if (userPoints) return HttpResponse.json(userPoints);
    return HttpResponse.error();
  }),
  http.get('/point/all', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    allPointRecords.slice(startIndex, startIndex + pageSize);
    const paginatedData = allPointRecords.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/point/topup', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = toppedUpPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = toppedUpPoints.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/point/deduct', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = deductedPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = deductedPoints.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/point/withdraw', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = withDrawnPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = withDrawnPoints.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/point/reward', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = rewardPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = rewardPoints.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/point/refund', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = refundPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = refundPoints.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.post('/point/withdraw', async ({ request }) => {
    try {
      const body = (await request.json()) as WithdrawRequest;
      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { amount } = body;
      userPoints.totalPoints -= amount;
      userPoints.totalWithdrawnPoints += amount;

      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '.');
      const existingDateIndex = allPointRecords.findIndex((record) => record.date === formattedDate);

      const newRecord = {
        id: Date.now(),
        type: '출금' as PointFilterType,
        amount: amount,
        total_after: userPoints.totalPoints,
        time: today.toTimeString().split(' ')[0],
      };

      if (existingDateIndex !== -1) {
        allPointRecords[existingDateIndex].records.unshift(newRecord);
        withDrawnPoints[existingDateIndex].records.unshift(newRecord);
      } else {
        allPointRecords.unshift({
          date: formattedDate,
          records: [newRecord],
        });
        withDrawnPoints.unshift({
          date: formattedDate,
          records: [newRecord],
        });
      }

      return new HttpResponse(
        JSON.stringify({
          message: '출금이 완료되었습니다.',
          total_after: userPoints.totalPoints,
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
];
export default pointHandlers;
