import { BASE_URL, AUTH_URL, REGISTER_URL } from '../../../Constants/URLs';
import type { SignUpData } from '../ui/SignUpScreen';

const registerUrl = `${BASE_URL}${AUTH_URL}${REGISTER_URL}`;

export const isRegister = async (credentials: SignUpData) => {
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...credentials, role: 'user'}),
    });
    if (response.ok) {
      const data = await response.json();
      //save token
      console.log(data.access_token);
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
