import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/landingPage/Landing.jsx";

import './styles/globalStyles.css'


import DashboardRoute from "./routes/DashboardRoute";
import UserList from "./pages/UserList";
import {Dashboard} from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import SubAdminLogin from "./pages/SubAdminLogin";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyPassword from "./pages/VerifyPassword";
import Login from "./pages/loginPage/Login.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'admin-login', element: <AdminLogin /> },
      { path: 'sub-admin-login', element: <SubAdminLogin /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'verify-password', element: <VerifyPassword /> },
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'userList',
        element: <UserList />
      }
    ]
  }
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App
