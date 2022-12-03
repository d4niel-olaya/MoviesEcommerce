import { Carrousel } from "../../components/carrousel/carrousel";
import { get } from '../../service/api';
import { Product } from "../../components/product/main";
import { CarrouselV2 } from "../../components/carrousel/carrouselv2";
import { CarrouselBootstrap } from "../../components/carrousel/carrousel_bootstrap";

const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');
const app = document.getElementById('app');
const mv = await get(`movie/${id}`);
const movie = await get(`movie/${id}/recommendations`);
const casting = await get(`movie/${id}/credits`);
// const producto = new Product(movie.results, app, casting.cast, mv)
const actors = casting.cast.filter(element => element.profile_path != null);
console.log(actors);
const carr = new CarrouselBootstrap('actores', actors.slice(0,10), app)





