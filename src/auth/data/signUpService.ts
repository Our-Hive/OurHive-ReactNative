import { BASE_URL, AUTH_URL, REGISTER_URL } from '../../Constants/URLs';
import type { SignUpData } from '../ui/SignUpScreen';
import { saveToken } from './tokenService';

const registerUrl = `${BASE_URL}${AUTH_URL}${REGISTER_URL}`;

export const isRegister = async (credentials: SignUpData) => {
  credentials.email.toLowerCase();
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...credentials, role: 'user' }),
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
    console.error('Error en la solicitud HTTP:', err);
    return false;
  }
};
