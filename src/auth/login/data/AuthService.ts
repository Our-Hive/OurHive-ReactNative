import { storeToken } from '../domain/JwtStorage';
import { BASE_URL } from '../domain/constants';

const login = async (credentials: any) => {
  try {
    //Realiza la solicitud de inicio de sesion y obtener el token del servidor
    const response = await fetch(`${BASE_URL}/path`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      await storeToken(token);
      return true;
    } else {
      // TODO: Manejar el error
      return false;
    }
  } catch (err) {
    console.error('Error en la solicitud HTTP:', err);
    return false;
  }
};

export { login };
