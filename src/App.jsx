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
import EmployerList from "./pages/employers/employerList";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import ResetPass from "./pages/auth/resetPass";
import SaveJob from "./pages/job/saveJob";
import MyJob from "./pages/dashboard/myJob";
import ApplicationJob from "./pages/dashboard/applicationJob";
import Message from "./pages/dashboard/message";





function RequireAuth({ children }) {
    var token = localStorage.getItem('token')
    return token ? children : <Navigate to="/login" replace />;
}


function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
                        <Route path="/employers/:userId" element={<RequireAuth> <EmployersSingle /></RequireAuth>} />
                        <Route path="/employers-review/:userId" element={<RequireAuth><EmployersReview /></RequireAuth>} />
                        <Route path="/employers-list" element={<RequireAuth><EmployerList /></RequireAuth>} />
                        <Route path="/candidate" element={<RequireAuth><Candidate /></RequireAuth>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/forget-pass" element={<ForgetPass />} />
                        <Route path="/job" element={<RequireAuth><JobList /></RequireAuth>} />
                        <Route path="/job/:postId" element={<RequireAuth><JobSingle /></RequireAuth>} />
                        <Route path="/about-us" element={<RequireAuth><AboutUs /></RequireAuth>} />
                        <Route path="/contact-us" element={<RequireAuth><ContactUs /></RequireAuth>} />
                        <Route path="/reset/:userId/:token" element={<ResetPass />} />
                        <Route path="/savejob-list" element={<RequireAuth><SaveJob /></RequireAuth>} />

                    </Route>

                    <Route path="/" element={<Dashboard />} >
                        <Route path="/profile" element={<RequireAuth> <Profile /></RequireAuth>} />
                        <Route path="/job/create" element={<RequireAuth><JobCreate /></RequireAuth>} />
                        <Route path="/myjob" element={<RequireAuth><MyJob/></RequireAuth>}/>
                        <Route path="/application-job/:postId" element={<RequireAuth><ApplicationJob/></RequireAuth>}/>
                        <Route path="/message" element={<RequireAuth><Message/></RequireAuth>}/>
                    </Route>

                </Routes>

            </BrowserRouter>
            <ToastContainer />



        </>
    );
}

export default App;
