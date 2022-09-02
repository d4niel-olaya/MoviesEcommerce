

export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
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
        const frag = document.createDocumentFragment();
        this.list.forEach(element => {
            frag.appendChild(this.Create(element));
        });
        this.dom.appendChild(frag);
    }
}
