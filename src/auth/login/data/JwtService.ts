import { getToken } from "../domain/JwtStorage";
import { BASE_URL } from "../domain/constants";

const fetchData = async (path: string) => {
    const token = await getToken();
    if(token){
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        try{
            const response = await fetch(`${BASE_URL}/${path}`, {headers});
            if(response.ok){
                const data =  await response.json();
                //TODO: Manejar la data
            }else{
                //TODO: Manejar errores
            }

        }catch(err){
            console.error('Error en la solicitd HTTP:', err);
        }
    }else{
        //TODO: Manejar el error
    }
}

export { fetchData };