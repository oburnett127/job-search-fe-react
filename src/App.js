import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import UpdateJobPage from './pages/UpdateJob';
import ErrorPage from './pages/Error';
import JobDetailPage from './pages/JobDetail';
import JobsPage from './pages/Jobs';
import JobsRootLayout from './pages/JobsRoot';
import HomePage from './pages/Home';
import NewJobPage from './pages/NewJob';
import RootLayout from './pages/Root';
import DeleteJobPage from "./pages/DeleteJob";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" exact  errorElement = {<ErrorPage />} element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/jobs" element={<JobsRootLayout />}>
                    <Route index element={<JobsPage />}></Route>
                    <Route path="/jobs/:id" id="job-detail">
                        <Route index element={<JobDetailPage />}></Route>
                        <Route path="/jobs/:id/edit" element={<UpdateJobPage />}></Route>
                        <Route path="/jobs/:id/delete" element={<DeleteJobPage />}></Route>
                    </Route>
                    <Route path="/jobs/new" element={<NewJobPage />}></Route>
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