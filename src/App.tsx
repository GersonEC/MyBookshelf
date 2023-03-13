import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookshelfProvider from './context/BookshelfProvider';
import Bookshelf from './pages/Bookshelf';
import Home from './pages/Home/Home';
import Signup from './pages/Signup';
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
  {
    path: '/signup',
    element: <Signup />,
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
