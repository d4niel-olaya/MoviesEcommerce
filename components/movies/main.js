import { NavBar } from "../navbar/main";

export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
        this.render();
    }
    /**
     * Method to create an movie card
     * @param {object} movieJSON
     * @returns {HTMLElement} Article (movie card)
     */
    Create({id,title, backdrop_path}){
        const card = document.createElement('article');
        card.setAttribute('class', 'movie');
        const items = `
        <p>${title}</p>
        <img src="${this.url+backdrop_path}" class="img">
        <button id="${id}" class="add">Add to card</button>`;
        card.insertAdjacentHTML('afterbegin', items);
        const btn = card.children[2]; // getting button
        this.AddToCart(btn,title,this.url+backdrop_path);
        return card;
    }
    /**
     * Add movie to card
     * I passed a button to add it onclick event
     * 
     * @param {HTMLButtonElement} movie // Button 
     * @param {string} name // Movie name
     * @param {string} img // Movie img
     */
    AddToCart(movie,name,img){
        movie.addEventListener('click', () =>{
            const movies = JSON.parse(localStorage.getItem('movies'));
            movies.push({id:movie.id, title:name, img:img});
            localStorage.setItem('movies', JSON.stringify(movies));
        })
    }
    render(){
        const header = document.createElement('header');
        header.setAttribute('class', 'header');
        const main = document.createElement('main');
        main.setAttribute('class', 'main');
        const cart = document.createElement('div');
        cart.setAttribute('class', 'cart');
        cart.setAttribute('id', 'cart');

        const frag = document.createDocumentFragment();
        const nav = new NavBar(header);
        header.appendChild(nav.Create());
        header.appendChild(nav.CreateSearch());
        header.appendChild(cart);
        frag.appendChild(header);

        this.list.forEach(element => {
            main.appendChild(this.Create(element));
        });
        frag.appendChild(main);
        this.dom.appendChild(frag);
    }
}
