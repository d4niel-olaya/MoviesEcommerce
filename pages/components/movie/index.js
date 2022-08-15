import MovieTemp from './index.html?raw';
const urlImg = 'https://image.tmdb.org/t/p/w500';


const Create = ({id,title,backdrop_path}) =>{{
    const url = urlImg+backdrop_path;
    return `<div class="movie">
            <a href="#">
            <p>${title}</p>
            <img src=${url} class="imgmovie">
            </a>
            <button>Add to cart</button>
        </div>`;

}}
export function render(dom, arr){
    const mov = arr.map(Create).join('');
    dom.innerHTML = MovieTemp.replace('${movies}', mov);
}

