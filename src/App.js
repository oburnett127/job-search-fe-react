import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditJobPage from './pages/EditJob';
import ErrorPage from './pages/Error';
import JobDetailPage from './pages/JobDetail';
import JobsPage from './pages/Jobs';
import JobsRootLayout from './pages/JobsRoot';
import HomePage from './pages/Home';
import NewJobPage from './pages/NewJob';
import RootLayout from './pages/Root';
import { action as manipulateJobAction } from './components/JobForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'jobs',
        element: <JobsRootLayout />,
        children: [
          {
            index: true,
            element: <JobsPage />,
          },
          {
            path: ':jobId',
            id: 'job-detail',
            children: [
              {
                index: true,
                element: <JobDetailPage />,
                action: deleteJobAction,
              },
              {
                path: 'edit',
                element: <EditJobPage />,
                action: manipulateJobAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewJobPage />,
            action: manipulateJobAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
