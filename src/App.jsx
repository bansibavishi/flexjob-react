import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidate from "./pages/candidate";
import EmployersReview from "./pages/employers/employersReview";
import EmployersSingle from "./pages/employers/employersSingle";
import Home from "./pages/home"
import JobList from "./pages/job/jobList";
import JobSingle from "./pages/job/jobSingle";
import Layout from "./layout/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgetPass from "./pages/auth/forgetPass";
import Profile from "./pages/dashboard/profilesetting";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import JobCreate from "./pages/job/jobCreate";
import { Navigate } from "react-router-dom/dist";
import Dashboard from "./layout/dashboard";
import Employerlist from "./pages/employers/employerList";


function RequireAuth({ children }) {
    return true ? children : <Navigate to="/login" replace />;
}


function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/employers" element={<EmployersSingle />} />
                        <Route path="/employers-review" element={<EmployersReview />} />
                       <Route path="employers-list" element={<Employerlist/>} />
                         <Route path="/candidate" element={<Candidate />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/forget-pass" element={<ForgetPass />} />s

                        <Route path="/job" element={<JobList />} />
                        {/* <Route path="/job/:id" element={<JobSingle />} /> */}
                    </Route>

                    <Route path="/" element={<Dashboard />} >
                        <Route path="/profile" element={<RequireAuth> <Profile /></RequireAuth>} />
                        <Route path="/job/create" element={<JobCreate />} />
                    </Route>

                </Routes>

            </BrowserRouter>
            <ToastContainer />

            {/* <JobList /> */}
            {/* <JobSingle/> */}
            {/* <EmployersSingle/> */}
            {/* <EmployersReview/> */}
            {/* <Candidate/> */}


        </>
    );
}

export default App;
