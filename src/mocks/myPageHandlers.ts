import { http, HttpResponse } from 'msw';
import { ProfileData, AvgStatsData } from './data/dummy';

const myPageHandlers = [
  http.get('/mypage/study-status/1', () => {
    if (ProfileData) return HttpResponse.json(ProfileData);
    return HttpResponse.error();
  }),
  http.get('/mypage/study-stats/1', () => {
    if (AvgStatsData) return HttpResponse.json(AvgStatsData);
    return HttpResponse.error();
  }),
];
export default myPageHandlers;
