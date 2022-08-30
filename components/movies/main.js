export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
    }

    Create({id,title, backdrop_path}){
        const card = document.createElement('article');
        card.innerHTML = `
        <p>${title}</p>
        <img src="${this.url+backdrop_path}">
        <button id="${id}">Add to card</button>`;
        return card;
    }
    render(){
        const frag = document.createDocumentFragment();
        this.list.forEach(element => {
            frag.appendChild(this.Create(element));
        });
        this.dom.appendChild(frag);
    }
}
