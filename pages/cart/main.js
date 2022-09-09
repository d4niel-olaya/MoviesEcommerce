import { Login } from "../../components/form/main";
import { Shopping } from "../../components/shopping/main";
import { NavBar } from "../../components/navbar/main";
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const app = document.getElementById('app');
const login = new Login(app);
if(params.get('cart') === 'true'){
    app.innerHTML = '';
    const navbar= new NavBar(app).renderCart();
    const cartShop = new Shopping(app, JSON.parse(localStorage.getItem('movies')));
    cartShop.render();
}

if(localStorage.getItem('sesion') === 'true'){
    window.location.pathname = '/pages/shop/index.html'; 
}
