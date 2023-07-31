import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IUser } from 'src/interface/IUser';
import { loginApi } from '../endpoints/api';
import { useSnackbar } from 'notistack';
interface AuthContextProps {
  user: IUser | null;
  login: (username: string) => Promise<void>;
  logout: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);   
    const { enqueueSnackbar } = useSnackbar();
    const login = async (username: string) => {
        try {
            const user = await loginApi(username);
            enqueueSnackbar("login successfully", {variant:"success"})
            setUser(user);
        } catch (error) {
            enqueueSnackbar("username not found, only user1 & user2 exist", {variant:"error"})
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
