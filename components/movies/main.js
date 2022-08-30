

export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
    }

    Create({id,title, backdrop_path}){
        const card = document.createElement('article');
        card.innerHTML = `
        <p>${title}</p>
        <img src="${this.url+backdrop_path}">
        <button id="${id}" class="add">Add to card</button>`;
        const btn = card.children[2];
        this.AddToCart(btn);
        return card;
    }
    AddToCart(movie){
        movie.addEventListener('click', () =>{
            const movies = JSON.parse(localStorage.getItem('movies'));
            movies.push({id:movie.id});
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
