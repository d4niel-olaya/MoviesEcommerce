

export class NavBar
{   
    /**
     * 
     * @param {HTMLDivElement} dom  Main div 
     */
    constructor(dom){
        this.dom = dom; // Div
    }
    /**
     * Create navbar 
     * @returns {HTMLDivElement} Navbar with icons
     */
    Create(){
        const container = document.createElement('section');
        container.setAttribute('class', 'nav-items');
        container.innerHTML = `
        <img src="../../assets/icons/icon_menu.svg">
        <img src="../../assets/icons/logo_yard_sale.svg">
        <a href="../../pages/cart/index.html?cart=true"><img src="../../assets/icons/icon_shopping_cart.svg"></a>`
        return container;
    }
    /**
     * Create Searc input
     * @returns {HTMLDivElement} Div with input type search
     */
    CreateSearch(){
        const container = document.createElement('div');
        container.setAttribute('class', 'search'); 
        container.innerHTML = `
        <input type="search" class="inp-search" placeholder="Buscar peli">
        `
        return container;
    }
    /**
     * Create Navbar for a shoppinCart view
     * @returns {HTMLHeadElement} Navbar
     */
    CreateCartNav(){
        const container = document.createElement('header');
        container.setAttribute('class', 'header-cart');
        container.innerHTML = `
        <img src="../../assets/icons/icon_menu.svg">
        <h2>Shopping cart</h2>
        `;
        return container;
    }

    /**
     * Render Navbar for a shoppingCart view
     * @render Header Element
     */
    renderCart(){
        const frag = document.createDocumentFragment();
        frag.appendChild(this.CreateCartNav());
        this.dom.appendChild(frag);
    }

    /**
     * Render Navbar for a shop view
     * @render Header Element
     */
    render(){
        const frag = document.createDocumentFragment();
        frag.append(this.Create());
        frag.append(this.CreateSearch());
        this.dom.appendChild(frag);
    }
}