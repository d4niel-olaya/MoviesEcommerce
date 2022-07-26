import { get } from "../../service/api";
import { NavBar } from "../navbar/main";

export class Shopping
{   
    /**
     * 
     * @param {HTMLDivElement} dom Div with id app
     * @param {Array} movies Api Query
     */
    constructor(dom,movies){
        this.movies = movies;
        this.dom = dom
        this.render();
    }
    /**
     * Create Navbar with menu icon and h2 tag
     * @returns {HTMLHeadElement} Header (NavBar)
     */
    CreateNavbar(){
        const header = document.createElement('header');
        header.setAttribute('class', 'header-cart');
        const navbar = `
            <img src="../../assets/icons/icon_menu.svg">
            <h2>Shopping cart</h2>`;
        header.insertAdjacentHTML('afterbegin',navbar);
        return header;
    }


    /**
     * Create and set onclick event to render a Specific order
     * @param {object} json 
     * @returns {HTMLImageElement} Arrow icon
     */
    CreateArrowBack(json){
        const arrow = document.createElement('img');
        arrow.setAttribute('src', '../../assets/icons/back-arrow-comb 2.svg');
        arrow.setAttribute('class', 'back');
        arrow.addEventListener('click', () => {this.renderOrder(json)});
        return arrow;
    }

    /**
     * Create Order detail. it contains order date and movies quantity
     * @param {object} object 
     * @returns {HTMLElement} Article
     */
    CreateDetail({id,title,img}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie');
        container.setAttribute('data-id', id);
        const items = `
        <img src="${img}" class="img">    
        <span class="title">${title}</span>
        <a href="/pages/product/index.html?id=${id}">Detalles</a>
        `;
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }

    /**
     * Create Orders item with close icon to delete itself
     * @param {*} object
     * @returns {HTMLElement} Article 
     */
    CreateItem({id,title,img}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie');
        container.setAttribute('data-id', id);

        const items = `
        <img src="${img}" class="img">    
        <span class="title">${title}</span>
        <a id="remove">X</a>    
        `
        container.insertAdjacentHTML('afterbegin', items);
        const remove = container.children[2];
        this.Remove(remove);
        return container;
    }
    /**
     * Create pre-order elements (movies selected and button to save the order)
     * @returns {HTMLDivElement} Div
     */
    CreateBtn(){
        const container = document.createElement('div');
        container.setAttribute('class', 'check');
        const items= `
        <div class="details">
            <span>Total</span>
            <span>${this.movies.length}</span>
        
        </div> 
        <div class="chk-btn">
            <button class="btn-check">Checkout</button>
        
        </div>`;
        container.insertAdjacentHTML('afterbegin',items);
        const btn = container.lastChild.children[0];
        this.Checkout(btn);
        return container;
    }

    /**
     * add onclick event to remove the element passed from the pre-order list
     * @param {HTMLElement} item 
     */
    Remove(item){
        item.addEventListener('click', (e) =>{
            const i = e.target;
            const parent = i.parentElement;
            const idItem = parent.getAttribute('data-id');
            parent.remove();
            this.movies = this.movies.filter(el=> el.id != idItem);
            localStorage.setItem('movies', JSON.stringify(this.movies));
        })
    }

    /**
     * Add onclick event to go orders view
     * @param {HTMLElement} item 
     */
    Checkout(item){
        item.addEventListener('click', () => {
            if(!localStorage.hasOwnProperty('checkout')){
                localStorage.setItem('checkout', '[]');
                return;
            }
            const check = JSON.parse(localStorage.getItem('checkout'));
            const movies = JSON.parse(localStorage.getItem('movies'));
            const date = new Date();
            if(movies.length == 0){
                alert('Debe agregar una peli');
            }
            else{

                check.push({date:date.toLocaleString(), movies:[...movies]});
                localStorage.setItem('checkout', JSON.stringify(check));
                localStorage.setItem('movies', '[]');
                this.renderOrder(check);
            }
            // alert('vas a ir al checkout');
        })
    }

    /**
     * Storage and render order
     * @param {HTMLElement} item 
     */
    OrderDetail(item){
        item.addEventListener('click', (e) =>{
            const order = JSON.parse(localStorage.getItem('checkout'));
            const dateOrder = item.getAttribute('data-order');
            const json = Object.values(order).find(element => element.date == dateOrder);
            this.renderOrderDetail(json);
            
        })
    }
    /**
     * Create order item (checkout view)
     * @param {*} object  
     * @returns {HTMLElement} Article
     */
    CreateOrder({date,movies}){
        const card = document.createElement('article');
        card.setAttribute('class', 'order');
        const content = `
        <div>
            <p>${date}</p>
            <p>${movies.length}</p>
        </div>
        <img src="../../assets/icons/arrow_rigth.svg" data-order="${date}">
        `
        card.insertAdjacentHTML('afterbegin', content);
        const img = card.children[1];
        this.OrderDetail(img);
        return card
    }
    
    /**
     * Render OrderDetail
     * @param {object} json 
     * @render Detail order
     */
    renderOrderDetail(json){
        const movies = document.createElement('section');
        movies.setAttribute('class','movies');
        const frag = document.createDocumentFragment();
        const items = json.movies;

        frag.appendChild(this.CreateNavbar());
        frag.appendChild(this.CreateArrowBack(JSON.parse(localStorage.getItem('checkout'))));

        items.forEach(elem =>{
            movies.appendChild(this.CreateDetail(elem));
        });
        this.dom.innerHTML = '';
        frag.appendChild(movies);
        this.dom.appendChild(frag);
    }   
    /**
     * Render Orders in the localstorage (shopping cart)
     * @param {*} obj 
     * @render Orders in the localstorage
     */
    renderOrder(obj){
        const frag = document.createDocumentFragment();
        const orders = document.createElement('section');
        orders.setAttribute('class', 'movies');
        frag.appendChild(this.CreateNavbar());
        obj.forEach(element =>{
            orders.appendChild(this.CreateOrder(element));
        })
        this.dom.innerHTML = '';
        frag.appendChild(orders);
        this.dom.appendChild(frag);
        console.log(frag);
    }
    /**
     * Create main div and render movies in the shopping cart
     * @render Shopping cart
     */
    render(){
        const frag = document.createDocumentFragment();
        const main = document.createElement('main');
        const movies = document.createElement('section');
        main.setAttribute('class', 'main-cart');
        movies.setAttribute('class', 'movies')
        this.movies.forEach(element => {
            movies.appendChild(this.CreateItem(element));
        });
        frag.appendChild(movies);
        frag.appendChild(this.CreateBtn());
        main.appendChild(frag)
        this.dom.appendChild(this.CreateNavbar());
        this.dom.appendChild(main);
        console.log(this.dom.children);

    }

}