import { http, HttpResponse } from 'msw';
import {
  UserPoints,
  AllPointRecords,
  ToppedUpPoints,
  DeductedPoints,
  WithDrawnPoints,
  RefundPoints,
  RewardPoints,
} from './data/dummy';
import { PointFilterType } from '../types/interface';
import { WithdrawRequest } from '../types/request';

const pointHandlers = [
  http.get('/point', () => {
    if (UserPoints) return HttpResponse.json(UserPoints);
    return HttpResponse.error();
  }),
  http.get('/point/all', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    AllPointRecords.slice(startIndex, startIndex + pageSize);
    const paginatedData = AllPointRecords.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/point/topup', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    ToppedUpPoints.slice(startIndex, startIndex + pageSize);
    const paginatedData = ToppedUpPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/point/deduct', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    DeductedPoints.slice(startIndex, startIndex + pageSize);
    const paginatedData = DeductedPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/point/withdraw', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    DeductedPoints.slice(startIndex, startIndex + pageSize);
    const paginatedData = WithDrawnPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/point/reward', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    DeductedPoints.slice(startIndex, startIndex + pageSize);
    const paginatedData = RewardPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/point/refund', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    DeductedPoints.slice(startIndex, startIndex + pageSize);
    const paginatedData = RefundPoints.slice(startIndex, startIndex + pageSize);
    const hasNextPage = paginatedData.length === pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
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
      UserPoints.totalPoints -= amount;
      UserPoints.totalWithdrawnPoints += amount;

      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '.');
      const existingDateIndex = AllPointRecords.findIndex((record) => record.date === formattedDate);

      const newRecord = {
        id: Date.now(),
        type: '출금' as PointFilterType,
        amount: amount,
        total_after: UserPoints.totalPoints,
        time: today.toTimeString().split(' ')[0],
      };

      if (existingDateIndex !== -1) {
        AllPointRecords[existingDateIndex].records.unshift(newRecord);
        WithDrawnPoints[existingDateIndex].records.unshift(newRecord);
      } else {
        AllPointRecords.unshift({
          date: formattedDate,
          records: [newRecord],
        });
        WithDrawnPoints.unshift({
          date: formattedDate,
          records: [newRecord],
        });
      }

      return new HttpResponse(
        JSON.stringify({
          message: '출금이 완료되었습니다.',
          total_after: UserPoints.totalPoints,
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
];
export default pointHandlers;
