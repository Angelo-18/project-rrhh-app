import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { RegisterAreaPage } from '../pages/RegisterAreaPage';


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="area" element={ <RegisterAreaPage /> } />

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
