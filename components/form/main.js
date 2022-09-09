export class Login{
    constructor(dom){
        this.dom = dom;
        this.render(this.dom);
        this.Log_in();
    }

    get Logo(){
        const header = document.createElement('header');
        header.setAttribute('class', 'header');
        const logo = document.createElement('img');
        logo.setAttribute('src', '../../assets/icons/logo_yard_sale.svg');
        header.appendChild(logo);
        return header;
    }
    get Main(){
        const main = document.createElement('main');
        main.setAttribute('class', 'main');
        main.appendChild(this.Logo)
        main.appendChild(this.Form);
        return main;
        
    }
    FormInput(text,type, id){
        const container = document.createElement('p');
        const items = `
        <label for="${id}">${text}</label>
        <br>
        <input type="${type}" id="${id}" required class="entry">
        `
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }
    get Btn(){
        const btn = document.createElement('button');
        btn.setAttribute('class', 'submit');
        btn.setAttribute('id', 'submit');
        btn.textContent = 'Login'
        return btn;
    }
    get Form(){
        const form = document.createElement('form');
        form.setAttribute('id', 'login');
        form.setAttribute('class', 'login');
        form.appendChild(this.FormInput('Usuario', 'text', 'user'));
        form.appendChild(this.FormInput('Password', 'password', 'password'));
        form.appendChild(this.Btn);
        return form;
    }
    render(){
        this.dom.appendChild(this.Main);
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
        const log = document.getElementById('login')
        log.addEventListener('submit', this.Validation);
    }
}
