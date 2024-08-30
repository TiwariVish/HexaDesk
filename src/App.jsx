import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './container/profile/authentication/overview/SignIn'; 
import SignUp from './container/profile/authentication/overview/SignUp'
import ForgotPassword from './container/profile/authentication/overview/ForgotPassword'
import DashboardBase from  './container/dashboard/DashboardBase'


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashboardBase />} />
      </Routes>
    </Router>
  );
}

export default App;
