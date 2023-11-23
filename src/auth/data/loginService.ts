import { BASE_URL, AUTH_URL, LOGIN_URL } from '../../Constants/URLs';
import type { FormData } from '../ui/LoginScreen';
import { saveToken } from './tokenService';

const LoginURL = `${BASE_URL}${AUTH_URL}${LOGIN_URL}`;

export const isLogin = async (credentials: FormData) => {
  credentials.email.toLowerCase();
  try {
    const response = await fetch(LoginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const data = await response.json();
      await saveToken(data.access_token);
      return true;
    } else {
      console.error('Error en la solicitud HTTP:', response);
      return false;
    }
  } catch (err) {
    console.error('Error en la solicitud HTTP1:', err);
    return false;
  }
};
