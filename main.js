import { get } from "./service/api";
import * as Producto from './pages/product/main.js';
localStorage.setItem('movies', '[]');
const app = document.getElementById('app');

const template = `<h1>Ecommerce</h1>
<a href="./pages/cart/index.html">Cart</a>
<a href="./pages/product/index.html">Product</a>
<a href="./pages/shop/index.html">Shop</a>`;
app.innerHTML = template;
