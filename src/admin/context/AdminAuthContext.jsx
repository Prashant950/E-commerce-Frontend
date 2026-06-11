import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      try {
        const { isLoggedIn, user } = JSON.parse(storedAuth);
        if (isLoggedIn && user) {
          setIsAdminLoggedIn(true);
          setAdminUser(user);
        }
      } catch (error) {
        console.error('Error parsing admin auth:', error);
        localStorage.removeItem('adminAuth');
      }
    }
  }, []);

  const adminLogin = (username, password) => {
    if (username === 'admin@gmail.com' && password === 'admin@123') {
      setIsAdminLoggedIn(true);
      setAdminUser({ username: 'admin@gmail.com', name: 'Admin User' });
      localStorage.setItem('adminAuth', JSON.stringify({ isLoggedIn: true, user: { username: 'admin@gmail.com', name: 'Admin User' } }));
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminUser(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminUser, adminLogin, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
