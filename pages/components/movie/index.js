import MovieTemp from './index.html?raw';
const urlImg = 'https://image.tmdb.org/t/p/w500';


export function addToCart(boton){
    const id = boton.parentNode.id;
    const movies = JSON.parse(localStorage.getItem('movies'));
    movies.push({'movie':id});
    localStorage.setItem('movies', JSON.stringify(movies));
}


const Create = ({id,title,backdrop_path}) =>{{
    const url = urlImg+backdrop_path;
    return `<div class="movie" id="${id}">
            <a href="#">
            <p>${title}</p>
            <img src=${url} class="imgmovie">
            </a>
            <button class="add">Add to cart</button>
        </div>`;

}}
export function render(dom, arr){
    const mov = arr.map(Create).join('');
    dom.innerHTML = MovieTemp.replace('${movies}', mov);
    const btn = document.querySelectorAll('.add');
    btn.forEach(e=>{
        e.addEventListener('click', () => {addToCart(e)});
    })
    // addToCart(btn);
}

