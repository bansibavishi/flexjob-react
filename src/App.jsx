import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidate from "./pages/candidate";
import EmployersReview from "./pages/employersReview";
import EmployersSingle from "./pages/employersSingle";
import Home from "./pages/home"
import JobList from "./pages/jobList";
import JobSingle from "./pages/jobSingle";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgetPass from "./pages/forgetPass";
import Profilesetting from "./pages/dashboard/profilesetting";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Createjob from "./pages/createjob";


function App() {
	return (
		<>

			<BrowserRouter>
				<Routes>

					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/job" element={<JobList />} />
						<Route path="/employers" element={<EmployersSingle />} />
						<Route path="/employers-review" element={<EmployersReview />} />
						<Route path="/candidate" element={<Candidate />} />
						<Route path="/login" element={<Login/>}/>
						<Route path="/register" element={<Register/>}/>
						<Route path="/forgetpass" element={<ForgetPass/>}/>
						<Route path="/profile" element={<Profilesetting/>}/>
						<Route path="/createjob" element={<Createjob/>}/>
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
