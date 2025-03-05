import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as Sentry from '@sentry/react';

async function deferRender() {
  const { worker } = await import('./mocks/browser.ts');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DNS,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', import.meta.env.VITE_SERVER_URL],
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
});
deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
