import { getToken } from '../../auth/data/tokenService';

export const getUserData = async () => {
  const token = await getToken();
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return {
        email: data.email,
        username: data.username,
      };
    } else {
      return {
        email: '',
        username: '',
      };
    }
  } catch (error) {
    console.error(error);
  }
};
