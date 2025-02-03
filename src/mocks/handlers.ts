import { http, delay } from 'msw';

export const handlers = [
  http.all('*', async () => {
    await delay(100);
  }),
];
