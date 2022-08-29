import { Login } from "../../components/form/main";



const btn = document.getElementById('submit');
const formulario = document.getElementById('login');
const logeo = new Login(formulario);

if(localStorage.getItem('sesion') === 'true'){
    window.location.pathname = '/pages/shop/index.html'; 
}
