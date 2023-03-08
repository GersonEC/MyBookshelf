import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookshelfProvider from './context/BookshelfProvider';
import Bookshelf from './pages/Bookshelf';
import Home from './pages/Home/Home';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bookshelf',
    element: <Bookshelf />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <BookshelfProvider>
          <RouterProvider router={router} />
        </BookshelfProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
