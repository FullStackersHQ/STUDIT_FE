import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes';
import { OverlayProvider } from 'overlay-kit';
import Toast from './components/Toast';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        retry: 1,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OverlayProvider>
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
