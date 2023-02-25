import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import EditJobPage from './pages/EditJob';
import ErrorPage from './pages/Error';
import JobDetailPage from './pages/JobDetail';
import JobsPage from './pages/Jobs';
import JobsRootLayout from './pages/JobsRoot';
import HomePage from './pages/Home';
import NewJobPage from './pages/NewJob';
import RootLayout from './pages/Root';
import { action as manipulateJobAction } from './components/JobForm';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" exact  errorElement = {<ErrorPage />} element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/jobs" element={<JobsRootLayout />}>
                    <Route index element={<JobsPage />}></Route>
                    <Route path="/jobs/:id" id="job-detail">
                        <Route index element={<JobDetailPage />}></Route>
                        <Route path="/jobs/:id/edit" action={manipulateJobAction} element={<EditJobPage />}></Route>
                    </Route>
                    <Route path="/jobs/new" action={manipulateJobAction} element={<NewJobPage />}></Route>
                </Route>
            </Route>
        )
    );

    return (
        <div className={"App"}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;