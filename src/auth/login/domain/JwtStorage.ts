import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (err) {
    console.error('Error al almacenar el JWT Token:', token);
  }
};

const getToken = async () => {
    try{
        const token = await AsyncStorage.getItem('token');
        return token;
    }catch(err){
        console.error('Error al obtener el JWT Token:', err);
    }
}

export { storeToken, getToken };