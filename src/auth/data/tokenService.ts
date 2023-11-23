import * as SecureStore from 'expo-secure-store';

export const saveToken = async (token: string) => {
  try {
    console.log('token');
    console.log(token);
    await SecureStore.setItemAsync('token-AUTH', token);
  } catch (err) {
    console.log('token error');
    console.log(err);
  }
};
export const getToken = async () => {
  const token = await SecureStore.getItemAsync('token-AUTH');
  if (token) {
    console.log('token GET');
    console.log(token);
    return token;
  }
  return null;
};
