import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : {};
    return userToken?.accessToken; // Chú ý sử dụng accessToken
  };
      
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.accessToken); // Chú ý sử dụng accessToken
  };

  return {
    setToken: saveToken,
    token
  };
}
