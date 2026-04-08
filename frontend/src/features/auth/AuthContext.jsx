import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('mixy-user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('mixy-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('mixy-user');
    }
  }, [user]);

  const signin = (values) => {
    const isAdmin = values.email === 'admin@mixyshop.com' && values.password === 'Admin123';
    const nextUser = {
      id: values.email,
      email: values.email,
      role: isAdmin ? 'admin' : values.role,
      name: isAdmin ? 'Mixy Admin' : values.name || 'Mixy Guest',
      token: 'mock-token',
    };
    setUser(nextUser);
    navigate('/');
  };

  const signout = () => {
    setUser(null);
    navigate('/');
  };

  const value = useMemo(() => ({ user, signin, signout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
