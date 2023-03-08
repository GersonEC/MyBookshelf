import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Home />
      </main>
    </QueryClientProvider>
  );
}

export default App;
