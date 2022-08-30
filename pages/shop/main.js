import { Movies } from "../../components/movies/main";
import { get } from "../../service/api";
const app = document.getElementById('app');
const list = await get('movie/popular');
const mov = new Movies(app,list.results);
mov.render();