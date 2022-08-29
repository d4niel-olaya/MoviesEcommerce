const url = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=af2c420e596f08347a8c9d2b1d756b7e';

// Rutas
// Pelicula por id       movie/{id}
// Peliculas populares    movie/popular


export async function get(collection){
    const response = await fetch(url+collection+apiKey).then(res => res.json());
    return response;
}