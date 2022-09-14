import { Carrousel } from "../../components/carrousel/carrousel";
import { get } from '../../service/api';
import { Product } from "../../components/product/main";

const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');
console.log(typeof(id));
const app = document.getElementById('app');
const movie = await get(`movie/${id}/recommendations`);
const casting = await get(`movie/${id}/credits`);
console.log(casting);
const producto = new Product(movie.results, app, casting.cast)
console.log(movie);