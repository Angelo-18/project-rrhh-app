import React from 'react'
import { AppTheme } from './Theme/AppTheme'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <AppTheme>
        <AppRouter/>
    </AppTheme>
  )
}
