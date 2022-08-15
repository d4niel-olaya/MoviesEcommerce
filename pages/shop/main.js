import { getPopular } from "../service/api_service";
import * as Movie from '../components/movie/index';

if(localStorage.getItem('sesion') == 'false'){
    window.location.pathname = '/pages/card/index.html';
}
const container = document.getElementById('main');
const listado = await getPopular();
Movie.render(container,listado);