import { Movies } from "../../components/movies/main";
import { get } from "../../service/api";
import { Shopping } from "../../components/shopping/main";

if(!localStorage.hasOwnProperty('movies')){
    localStorage.setItem('movies', '[]');
}
const app = document.getElementById('app');
const list = await get('movie/popular');
const mov = new Movies(app,list.results);
mov.render();
const shop = new Shopping(JSON.parse(localStorage.getItem('movies')));
shop.render();