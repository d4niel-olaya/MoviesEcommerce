import { getInfo, getPopular } from "../service/api_service";

if(localStorage.getItem('sesion') == 'false'){
    window.location.pathname = '/pages/card/index.html';
}
const listado = await getInfo(550);
console.log(listado);