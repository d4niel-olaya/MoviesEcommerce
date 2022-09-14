import { Movies } from "../../components/movies/main";
import { get } from "../../service/api";
import { Shopping } from "../../components/shopping/main";
import { NavBar } from "../../components/navbar/main";
if(!localStorage.hasOwnProperty('movies')){
    localStorage.setItem('movies', '[]');
}
const app = document.getElementById('app');

const list = await get('movie/popular');
const mov = new Movies(app,list.results);
const cart = document.getElementById('cart');

// const shop = new Shopping(JSON.parse(localStorage.getItem('movies')), cart);
// shop.render();