import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [upcomingGames, setUpcomingGames] = useState([]);

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      if (userToken) {
        setToken(userToken);
        const decodedToken = jwtDecode(userToken);
        setUserId(decodedToken.userId);
      }
    } catch (error) {
      console.error('Error checking login status', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, userId, isLoading, upcomingGames, setUpcomingGames }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };