import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/user.context'

const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 ">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App