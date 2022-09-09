import { Login } from "../../components/form/main";
import { Shopping } from "../../components/shopping/main";
import { NavBar } from "../../components/navbar/main";
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const app = document.getElementById('app');
if(params.get('cart') === 'true'){
    app.innerHTML = '';
    const cartShop = new Shopping(app, JSON.parse(localStorage.getItem('movies')));
}
else{
    if(localStorage.getItem('sesion') === 'true'){
        window.location.pathname = '/pages/shop/index.html'; 
    }
    const login = new Login(app);
}

