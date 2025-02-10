import { http, HttpResponse } from 'msw';
import { UserPoints, AllPointRecords, ToppedUpPoints, DeductedPoints, WithDrawnPoints } from './data/dummy';
import { PointFilterType, WithdrawRequest } from '../types/interface';

const pointHandlers = [
  http.get('/point', () => {
    if (UserPoints) return HttpResponse.json(UserPoints);
    return HttpResponse.error();
  }),
  http.get('/point/all', () => {
    if (AllPointRecords) return HttpResponse.json(AllPointRecords);
    return HttpResponse.error();
  }),
  http.get('/point/topup', () => {
    if (ToppedUpPoints) return HttpResponse.json(ToppedUpPoints);
    return HttpResponse.error();
  }),
  http.get('/point/deduct', () => {
    if (DeductedPoints) return HttpResponse.json(DeductedPoints);
    return HttpResponse.error();
  }),
  http.get('/point/withdraw', () => {
    if (WithDrawnPoints) return HttpResponse.json(WithDrawnPoints);
    return HttpResponse.error();
  }),
  http.post('/point/withdraw', async ({ request }) => {
    try {
      const body = (await request.json()) as WithdrawRequest;
      const { amount } = body;
      if (!body || typeof amount !== 'number') {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 amount가 없습니다.' }), {
          status: 400,
        });
      }
      UserPoints.totalPoints -= amount;
      UserPoints.totalWithdrawnPoints += amount;

      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '.');

      // AllPointRecords는 GroupedByDate 타입으로 가정
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
