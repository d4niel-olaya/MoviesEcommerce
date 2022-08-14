const ApiKey = 'dde722cb807472090076a60be85c0010'
const URL = 'https://api.themoviedb.org/3'


const getUrl = (ruta, busqueda) => {
    const params = new URLSearchParams();
    params.set('api_key', ApiKey);
    // (Object.keys((busqueda||{}))).map(key => {
    //     params.set(key, busqueda[key]);
    // })
    console.log(`${URL}/${ruta}?${params.toString()}`);
    // console.log(busqueda);
    // console.log(params.toString());
    return `${URL}/${ruta}?${params.toString()}`
}


export async function getCategories(){
    const Url = getUrl('genre/movie/list');
    return fetch(Url).then(res => res.json());
}


export async function getInfo(id){
    const Url = getUrl(`movie/${id}`);
    const respuesta = await fetch(Url).then(res => res.json());
    return {name:respuesta.title, rate: respuesta.vote_average,
            genres: respuesta.genres[0].name,
            image:`https://image.tmdb.org/t/p/w500/`+ respuesta.backdrop_path};
}

export async function getPopular(){
    const Url = getUrl(`discover/movie`);
    return fetch(Url).then(res => res.json()).then(e => e.results);
}