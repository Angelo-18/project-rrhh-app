import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterAreaPage } from '../pages/RegisterAreaPage';
import { PageMain } from '../../rrhhApp/pages/PageMain';
import { useMemo, useState } from 'react';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


export const AuthRoutes = () => {
  const authStatus = 'not-autafhenticated';
  const isProfileComplete = 'not-authentiacated';
  const [isnavigate, setIsnaviagte] = useState('login');
  useMemo(() => {
    if (authStatus === 'not-authenticated') {
      setIsnaviagte('login');
    } else if (isProfileComplete === 'not-authenticated') {
      setIsnaviagte('area');
    } 
  }, [authStatus, isProfileComplete])

  console.log(isnavigate);
  return (
    <Routes>
        {
          ( authStatus === 'not-authenticated')  
          ? <>
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/signup" element={ <RegisterPage /> } />
            </>

          : (isProfileComplete === 'not-authenticated')
          ? <Route path="/area" element={ <RegisterAreaPage /> } />
          : <Route path="/*" element={ <PageMain/> } />
        }
        <Route path="/*" element={ <Navigate to={`/auth/${isnavigate}`} /> } />
    </Routes>
  )
}
