// routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

import MainLayout from '../layouts/MainLayout';
import SignUp from '../components/SignUp';
// import Dashboard from '../components/Dashboard';
// import PatientList from '../components/PatientList';
// import PatientDetail from '../components/PatientDetail';
// import AlertCenter from '../components/AlertCenter';
// import Profile from '../components/Profile';

const AppRoutes = () => (
   <Router>
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />

         {/* Protected routes with layout */}
         <Route element={<MainLayout />}>
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/patients/:id" element={<PatientDetail />} />
            <Route path="/alerts" element={<AlertCenter />} />
            <Route path="/profile" element={<Profile />} /> */}
         </Route>

         <Route path="*" element={<NotFound />} />
      </Routes>
   </Router>
);

export default AppRoutes;
