

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
        <img src="../../assets/icons/icon_shopping_cart.svg">
        <div>
        <input type="search" placeholder="Buscar" class="search">
        </div>`
        
        return container;
    }
    render(){
        const frag = document.createDocumentFragment();
        frag.append(this.Create());
        this.dom.appendChild(frag);
    }
}