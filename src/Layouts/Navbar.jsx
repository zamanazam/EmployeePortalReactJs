import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/js/main';
import { useNavigate } from 'react-router-dom';

function Navbar({children}) {
    const navigate = useNavigate();
    const currentRoleId = sessionStorage.getItem('RoleId');
    useEffect(() => {
      }, []); 
    const renderto=(tonavigate)=>{
        navigate(tonavigate);
    }

    function SignOut(){
      debugger
      sessionStorage.clear();
      navigate('/');
    }
  return (
    <>
        
       
        </>
 //   <div>
// <header id="header" classNameName="header fixed-top d-flex align-items-center">

// <div classNameName="d-flex align-items-center justify-content-between">
//   <a href="index.html" classNameName="logo d-flex align-items-center">
//     <img src="../assets/img/logo.png" alt="" />
//     <span classNameName="d-none d-lg-block">NiceAdmin</span>
//   </a>
//   <i classNameName="bi bi-list toggle-sidebar-btn"></i> 
// </div>

// <div classNameName="search-bar">
//   <form classNameName="search-form d-flex align-items-center" method="POST" action="#">
//     <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
//     <button type="submit" title="Search"><i classNameName="bi bi-search"></i></button>
//   </form>
// </div>

// <nav classNameName="header-nav ms-auto">
//   <ul classNameName="d-flex align-items-center">

//     <li classNameName="nav-item d-block d-lg-none">
//       <a classNameName="nav-link nav-icon search-bar-toggle " href="#">
//         <i classNameName="bi bi-search"></i>
//       </a>
//     </li>

//     <li classNameName="nav-item dropdown">

//       <a classNameName="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
//         <i classNameName="bi bi-bell"></i>
//         <span classNameName="badge bg-primary badge-number">4</span>
//       </a>

//       <ul classNameName="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
//         <li classNameName="dropdown-header">
//           You have 4 new notifications
//           <a href="#"><span classNameName="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="notification-item">
//           <i classNameName="bi bi-exclamation-circle text-warning"></i>
//           <div>
//             <h4>Lorem Ipsum</h4>
//             <p>Quae dolorem earum veritatis oditseno</p>
//             <p>30 min. ago</p>
//           </div>
//         </li>

//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="notification-item">
//           <i classNameName="bi bi-x-circle text-danger"></i>
//           <div>
//             <h4>Atque rerum nesciunt</h4>
//             <p>Quae dolorem earum veritatis oditseno</p>
//             <p>1 hr. ago</p>
//           </div>
//         </li>

//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="notification-item">
//           <i classNameName="bi bi-check-circle text-success"></i>
//           <div>
//             <h4>Sit rerum fuga</h4>
//             <p>Quae dolorem earum veritatis oditseno</p>
//             <p>2 hrs. ago</p>
//           </div>
//         </li>

//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="notification-item">
//           <i classNameName="bi bi-info-circle text-primary"></i>
//           <div>
//             <h4>Dicta reprehenderit</h4>
//             <p>Quae dolorem earum veritatis oditseno</p>
//             <p>4 hrs. ago</p>
//           </div>
//         </li>

//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>
//         <li classNameName="dropdown-footer">
//           <a href="#">Show all notifications</a>
//         </li>

//       </ul>

//     </li>

//     <li classNameName="nav-item dropdown">

//       <a classNameName="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
//         <i classNameName="bi bi-chat-left-text"></i>
//         <span classNameName="badge bg-success badge-number">3</span>
//       </a>

//       <ul classNameName="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
//         <li classNameName="dropdown-header">
//           You have 3 new messages
//           <a href="#"><span classNameName="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="message-item">
//           <a href="#">
//             <img src="../assets/img/messages-1.jpg" alt="" classNameName="rounded-circle"/>
//             <div>
//               <h4>Maria Hudson</h4>
//               <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//               <p>4 hrs. ago</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="message-item">
//           <a href="#">
//             <img src="../assets/img/messages-2.jpg" alt="" classNameName="rounded-circle"/>
//             <div>
//               <h4>Anna Nelson</h4>
//               <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//               <p>6 hrs. ago</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="message-item">
//           <a href="#">
//             <img src="../assets/img/messages-3.jpg" alt="" classNameName="rounded-circle"/>
//             <div>
//               <h4>David Muldon</h4>
//               <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//               <p>8 hrs. ago</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li classNameName="dropdown-footer">
//           <a href="#">Show all messages</a>
//         </li>

//       </ul>

//     </li>

//     <li classNameName="nav-item dropdown pe-3">

//       <a classNameName="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
//         <img src="assets/img/profile-img.jpg" alt="Profile" classNameName="rounded-circle"/>
//         <span classNameName="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
//       </a>
//       <ul classNameName="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
//         <li classNameName="dropdown-header">
//           <h6>Kevin Anderson</h6>
//           <span>Web Designer</span>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li>
//           <a classNameName="dropdown-item d-flex align-items-center" href="users-profile.html">
//             <i classNameName="bi bi-person"></i>
//             <span>My Profile</span>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li>
//           <a classNameName="dropdown-item d-flex align-items-center" href="users-profile.html">
//             <i classNameName="bi bi-gear"></i>
//             <span>Account Settings</span>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li>
//           <a classNameName="dropdown-item d-flex align-items-center" href="pages-faq.html">
//             <i classNameName="bi bi-question-circle"></i>
//             <span>Need Help?</span>
//           </a>
//         </li>
//         <li>
//           <hr classNameName="dropdown-divider"/>
//         </li>

//         <li>
//           <a classNameName="dropdown-item d-flex align-items-center" href="#" onClick={()=>SignOut()}>
//             <i classNameName="bi bi-box-arrow-right"></i>
//             <span>Sign Out</span>
//           </a>
//         </li>

//       </ul>
//     </li>
//   </ul>
// </nav>

// </header>

// <aside id="sidebar" classNameName="sidebar">
// {currentRoleId == 1 ? (
//   <ul classNameName="sidebar-nav" id="sidebar-nav">
//       <li classNameName="nav-item">
//           <Link to="/Companies" classNameName="nav-link collapsed">
//               <i classNameName="bi bi-columns-gap"></i><span>Companies</span>
//           </Link>
//       </li>

//       <li classNameName="nav-item">
//           <Link to="/Users" classNameName="nav-link collapsed">
//             <i classNameName="bi bi-people"></i><span>Users</span>
//           </Link>
//       </li>
//   </ul>
// ): (
//     <ul classNameName="sidebar-nav" id="sidebar-nav">
//         <li classNameName="nav-item">
//             <Link to="/Projects" classNameName="nav-link collapsed">
//               <i classNameName="bi bi-people"></i><span>Projects</span>
//             </Link>
//         </li>
//     </ul>
// )}
// </aside>
// <a href="#" classNameName="back-to-top d-flex align-items-center justify-content-center"><i classNameName="bi bi-arrow-up-short"></i></a> 
// </div>
   );
}

export default Navbar;

