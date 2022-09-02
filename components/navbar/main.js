

export class NavBar
{
    constructor(dom){
        this.dom = dom;
    }
    Create(){
        const container = document.createElement('section');
        container.setAttribute('class', 'nav-items');
        container.innerHTML = `
        <img src="../../assets/icons/icon_menu.svg">
        <img src="../../assets/icons/logo_yard_sale.svg">
        <img src="../../assets/icons/icon_shopping_cart.svg">`
        const cart = container.children[2];

        this.OpenCart(cart);
        return container;
    }
    OpenCart(item){
        item.addEventListener('click', () =>{
            const movies = JSON.parse(localStorage.getItem('movies'));
            console.log(movies);
        })
    }
    CreateSearch(){
        const container = document.createElement('div');
        container.setAttribute('class', 'search'); 
        container.innerHTML = `
        <input type="search" class="inp-search" placeholder="Buscar peli">
        `
        return container;
    }
    render(){
        const frag = document.createDocumentFragment();
        frag.append(this.Create());
        frag.append(this.CreateSearch());
        this.dom.appendChild(frag);
    }
}