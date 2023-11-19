import { BASE_URL, AUTH_URL, REGISTER_URL } from '../../../Constants/URLs';
import type { SignInData } from '../ui/SignInScreen';

const registerUrl = `${BASE_URL}${AUTH_URL}${REGISTER_URL}`;

export const isRegister = async (credentials: SignInData) => {
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
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
