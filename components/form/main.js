export class Login{
    constructor(login){
        this.login = login;
        this.Log_in();
    }
    Validation(event){
        event.preventDefault();
        const user = document.getElementById('user');
        const password = document.getElementById('password');
        if(user.value != 'Juan'){
            alert('Usuario incorrecto');
            return;
        }
        if(password.value != 'Olaya'){
            alert('Password incorrecto');
            return;
        }
        localStorage.setItem('sesion', 'true');
        window.location.pathname = '/pages/shop/index.html'; 
    }

    Log_in(){
        this.login.addEventListener('submit', this.Validation);
    }
}
