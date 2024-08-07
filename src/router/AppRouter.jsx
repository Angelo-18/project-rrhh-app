import React from 'react'
import { Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { ResourceHumanRoutes } from '../rrhhApp/routes/ResourceHumanRoutes'

export const AppRouter = () => {
  return (

    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ < ResourceHumanRoutes/> } /> 

    </Routes>
  )
}
