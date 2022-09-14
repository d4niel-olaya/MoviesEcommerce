import { NavBar } from "../navbar/main";

export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
        this.render();
    }

    Create({id,title, backdrop_path}){
        const card = document.createElement('article');
        card.setAttribute('class', 'movie');
        const items = `
        <p>${title}</p>
        <img src="${this.url+backdrop_path}" class="img">
        <button id="${id}" class="add">Add to card</button>`;
        card.insertAdjacentHTML('afterbegin', items);
        const btn = card.children[2];
        const name = card.children[0];
        const img = card.children[1];
        this.AddToCart(btn,name,img);
        return card;
    }
    AddToCart(movie,name,img){
        movie.addEventListener('click', () =>{
            const movies = JSON.parse(localStorage.getItem('movies'));
            movies.push({id:movie.id, title:name.textContent, img:img.src});
            localStorage.setItem('movies', JSON.stringify(movies));
        })
    }
    render(){
        const header = document.createElement('header');
        header.setAttribute('class', 'header');
        const main = document.createElement('main');
        main.setAttribute('class', 'main');

        const frag = document.createDocumentFragment();
        const nav = new NavBar(header);
        header.appendChild(nav.Create());
        header.appendChild(nav.CreateSearch());
        frag.appendChild(header);

        this.list.forEach(element => {
            main.appendChild(this.Create(element));
        });
        frag.appendChild(main);
        this.dom.appendChild(frag);
    }
}
