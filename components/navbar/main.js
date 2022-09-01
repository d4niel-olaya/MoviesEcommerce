

export class NavBar
{
    constructor(dom){
        this.dom = dom;
    }
    Create(){
        const container = document.createElement('section');
        container.innerHTML = `<img src="../../assets/icons/logo_yard_sale.svg">`
        return container;
    }
    render(){
        const frag = document.createDocumentFragment();
        frag.append(this.Create());
        this.dom.appendChild(frag);
    }
}