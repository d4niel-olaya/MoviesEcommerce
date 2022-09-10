import { Carrousel } from "../../components/carrousel/carrousel";
import { get } from '../../service/api';

const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');
console.log(typeof(id));
const app = document.getElementById('app');
const movie = await get('movie/500/recommendations');
const carr = new Carrousel(movie.results.slice(0,5),app);
carr.Render();
carr.StateIndex();
console.log(movie);