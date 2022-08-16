import { getPopular } from "../service/api_service";
import * as Movie from '../components/movie/index';
import * as Nav from '../components/navbar/main';
if(localStorage.getItem('sesion') == 'false'){
    window.location.pathname = '/pages/card/index.html';
}
const container = document.getElementById('main');
const listado = await getPopular();

const header = document.getElementById('header');
Nav.render(header);
Movie.render(container,listado);