import { get } from "../../service/api";


export class Shopping
{
    constructor(dom,movies){
        this.movies = movies;
        this.dom = dom
    }

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
    Checkout(item){
        item.addEventListener('click', () => {
            if(!localStorage.hasOwnProperty('checkout')){
                localStorage.setItem('checkout', '[]');
                return;
            }
            const check = JSON.parse(localStorage.getItem('checkout'));
            const movies = JSON.parse(localStorage.getItem('movies'));
            const date = new Date();
            check.push({date:date.toLocaleString(), movies:[...movies]});
            localStorage.setItem('checkout', JSON.stringify(check));
            localStorage.setItem('movies', '[]');
            this.renderOrder(check);
            // alert('vas a ir al checkout');
        })
    }
    OrderDetail(item){
        item.addEventListener('click', (e) =>{
            const order = JSON.parse(localStorage.getItem('checkout'));
            const dateOrder = item.getAttribute('data-order');
            const json = Object.values(order).find(element => element.date == dateOrder);
            this.renderDetailOrder(json);
            
        })
    }
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

    renderDetailOrder(json){
        const frag = document.createDocumentFragment();
        const items = json.movies;
        items.forEach(elem =>{
            frag.appendChild(this.CreateItem(elem));
        })
        this.dom.children[1].innerHTML = '';
        this.dom.appendChild(frag);
    }   
    renderOrder(obj){
        console.log(obj);
        const frag = document.createDocumentFragment();
        obj.forEach(element =>{
            frag.appendChild(this.CreateOrder(element));
        })
        this.dom.children[1].innerHTML = '';
        console.log(this.dom);
        this.dom.appendChild(frag);
        console.log(frag);
    }
    render(){
        const frag = document.createDocumentFragment();
        this.movies.forEach(element => {
                frag.appendChild(this.CreateItem(element));
           });
        frag.appendChild(this.CreateBtn())
        this.dom.appendChild(frag);
        console.log(this.dom.children);

    }

}