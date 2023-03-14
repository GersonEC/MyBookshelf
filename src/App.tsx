import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BookshelfProvider from './context/BookshelfProvider';
import UserProvider from './context/UserProvider';
// import Bookshelf from './pages/Bookshelf';
import Home from './pages/Home/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const queryClient = new QueryClient();

const Bookshelf = React.lazy(() => import('./pages/Bookshelf'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bookshelf',
    element: (
      <ProtectedRoute>
        <React.Suspense fallback='Loading...'>
          <Bookshelf />
        </React.Suspense>
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
