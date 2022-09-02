

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
        <a href="../../pages/cart/index.html?cart=true"><img src="../../assets/icons/icon_shopping_cart.svg"></a>`
        return container;
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