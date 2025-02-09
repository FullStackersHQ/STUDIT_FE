import { http, HttpResponse } from 'msw';
import { UserPoints, AllPointRecords, ToppedUpPoints, DeductedPoints, WithDrawnPoints } from './data/dummy';

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
];
export default pointHandlers;
