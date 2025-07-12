import { Outlet, NavLink } from 'react-router-dom';
// import '../styles/MainLayout.css'; 

const MainLayout = () => {
   return (
      <div className="app-container">
         <aside className="sidebar">
            <h2>SAMS</h2>
            <nav>
               <NavLink to="/dashboard">Dashboard</NavLink>
               <NavLink to="/patients">Patients</NavLink>
               <NavLink to="/alerts">Alerts</NavLink>
               <NavLink to="/profile">Profile</NavLink>
            </nav>
         </aside>

         <main className="main-content">
            {/* This renders the child route component */}
            <Outlet />
         </main>
      </div>
   );
};

export default MainLayout;
