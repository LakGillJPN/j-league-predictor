import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext.tsx';

export default function ProtectedRoute({ children }: { children: React.ReactNode }): JSX.Element {
  const { user } = UserAuth();
  
  if (!user) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
}