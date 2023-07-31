import React from "react";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider, useAuth } from '../infrastructure/context/AuthContext';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthenticatedApp />
      </AuthProvider>
    </QueryClientProvider>
  );
};

const AuthenticatedApp = () => {
  const { user } = useAuth();
  
  return (
    <>
      {user ? <TaskPage /> : <LoginPage />}
    </>
  );
};

export default App;
