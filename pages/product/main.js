import { Carrousel } from "../../components/carrousel/carrousel";
import { get } from '../../service/api';


const app = document.getElementById('app');
const movie = await get('movie/500/recommendations');
const carr = new Carrousel(movie.results.slice(0,5),app);
carr.RenderV2();
console.log(movie);