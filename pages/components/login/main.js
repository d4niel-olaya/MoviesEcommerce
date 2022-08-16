import LoginTemplate from './index.html?raw';

const LogIn = (e) =>{
    e.preventDefault();
    const user = document.getElementById('email');
    const password = document.getElementById('password');
    if(user.value == 'Juan' && password.value == 'Olaya'){
        localStorage.setItem('sesion', true);
        localStorage.setItem('movies', '[]');
        alert('Contraseña Valida');
        window.location.pathname = 'pages/shop/index.html';
        return;
    }
    else{
        localStorage.setItem('sesion', false);
        alert('No puede entrar');
        return;
    }
}

export function render(dom){
    dom.innerHTML = LoginTemplate;
    const form = document.getElementById('form');
    form.addEventListener('submit', LogIn);
    
}