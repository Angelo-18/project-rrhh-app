import React, { useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { ResourceHumanRoutes } from '../rrhhApp/routes/ResourceHumanRoutes'
export const AppRouter = () => {
  const authStatus = 'not-authenaticated';
  const isProfileComplete = 'not-authenticatead';

  return (
    <Routes>
      {
        ( authStatus === 'not-authenticated' || isProfileComplete === 'not-authenticated' )  
          ? <Route path="/auth/*" element={ <AuthRoutes /> }  />
          : <Route path="/*" element={ <ResourceHumanRoutes /> }  />
      }
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />

    </Routes>
  )
}
