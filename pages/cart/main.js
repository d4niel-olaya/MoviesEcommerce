import { Login } from "../../components/form/main";
import { Shopping } from "../../components/shopping/main";
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const app = document.getElementById('app');
const btn = document.getElementById('submit');
const formulario = document.getElementById('login');
const logeo = new Login(formulario);
if(params.get('cart') === 'true'){
    const cartShop = new Shopping(app, JSON.parse(localStorage.getItem('movies')));
    cartShop.render();
}

if(localStorage.getItem('sesion') === 'true'){
    window.location.pathname = '/pages/shop/index.html'; 
}
