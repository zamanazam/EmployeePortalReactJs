import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard';
import Companies from './Pages/Companies';
import Users from './Pages/Users';
import Projects from './Pages/Projects';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import CompanyDetail from './Pages/CompanyDetail';
import ProjectDetails from './Pages/ProjectDetails';
import ProjectTimeLogs from './Pages/TimeLogs';
import CreateAccount from './Pages/CreateAccount';
import NotAuthorized from './Pages/NotAuthorized';
import Alert from './Components/Alert';
import { type } from '@testing-library/user-event/dist/type';


function App() {
    const PrivateRoute = ({ element, ...props }) => {
    const token = sessionStorage.getItem('Token');
    document.body.classList.remove('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    var navbar = document.getElementById('NavBar');
    if (navbar != null) {
        navbar.style.display = 'flex';
    }

    const isLoggedIn = !!token;    
    return isLoggedIn ? (
      React.cloneElement(element, props)
    ) : (
        <Navigate to="/logIn" replace state={{ from: props.location?.pathname || '/' }} />
    );
  };
  

  
  return (
    <Router>
      <>
          <NavBar title="EmployeePortal" section1="Setting" section2="ActivityLogy" section3="LogOut"/>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <SideBar section1="Dashboard" section2="Companies" section3="Users" section4="Projects" />
            </div>
            <div id="layoutSidenav_content">
              <main>
                <Routes> 
                  <Route path="/logIn" element={<LogIn/>}/>
                  <Route path="/createAccount" element={<CreateAccount />} /> 
                  <Route path="/companies" element={<PrivateRoute element={<Companies />} />} />
                  <Route path="/notAuthorized" element={<PrivateRoute element={<NotAuthorized />} />} />
                  <Route path="/Detail/:companyId" element={<PrivateRoute element={<CompanyDetail />} />} />
                  <Route path="/users" element={<PrivateRoute element={<Users />} />} />
                  <Route path="/projects" element={<PrivateRoute element={<Projects />} />} />
                  <Route path="/ProjectDetails/:id" element={<PrivateRoute element={<ProjectDetails />} />} />
                  <Route path="/ProjectTimeLogs/:projectId/:AssigneeId" element={<PrivateRoute element={<ProjectTimeLogs />} />} />
                  {/* <Route path="/ProjectsStatusWise" element={<PrivateRoute element={<ProjectsStatusWise />} />} /> */}
                  <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
      </>
    </Router>
  );
}

export default App;

{/* <Routes>
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/companies" element={<PrivateRoute element={<Companies />} />} />
                <Route path="/Detail/:companyId" element={<PrivateRoute element={<CompanyDetail />} />} />
                <Route path="/users" element={<PrivateRoute element={<Users />} />} />
                <Route path="/projects" element={<PrivateRoute element={<Projects />} />} />
                <Route path="/ProjectDetails/:id" element={<PrivateRoute element={<ProjectDetails />} />} />
                <Route path="/ProjectTimeLogs/:projectId/:AssigneeId" element={<PrivateRoute element={<ProjectTimeLogs />} />} />
                <Route path="/ProjectsStatusWise" element={<PrivateRoute element={<ProjectsStatusWise />} />} />
                <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
              </Routes> */}  


  // <Router>
  //    <Layout>
  //     <Routes> 
  //         {/* <Route path="/login" element={<LogIn/>} />  */}
  //         <Route path="/" element={<LogIn/>} />
  //         <Route path="/Home" element={<Dashboard />} />
  //         <Route path="/ProjectsStatusWise" element={<ProjectsStatusWise />} />
  //         <Route path="/Companies" element={<Companies />}/>
  //         <Route path="/Detail/:companyId" element={<CompanyDetail />}/>
  //         <Route path="/ProjectTimeLogs/:projectId/:AssigneeId" element={<ProjectTimeLogs/>}/>
  //         <Route path="/ProjectDetails/:id" element={<ProjectDetails />}/>
  //         <Route path="/Projects" element={<Projects />}/>
  //         <Route path="/Users" element={<Users />}/>
  //         <Route path="/Layout/:path" element={<Layout />}/> 
  //     </Routes>
  // </Layout>
  // </Router>