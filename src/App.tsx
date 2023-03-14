import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BookshelfProvider from './context/BookshelfProvider';
import UserProvider from './context/UserProvider';
import Bookshelf from './pages/Bookshelf';
import Home from './pages/Home/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bookshelf',
    element: (
      <ProtectedRoute>
        <Bookshelf />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sign-up',
    element: <Signup />,
  },
  {
    path: '/sign-in',
    element: <Signin />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BookshelfProvider>
          <RouterProvider router={router} />
        </BookshelfProvider>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
