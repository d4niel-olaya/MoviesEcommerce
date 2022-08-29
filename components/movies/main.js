export class Movies
{
    constructor(dom, list){
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.list = list;
    }

    Create({id,title, backdrop_path}){
        const card = document.createElement('article');
        const text = document.createElement('p');
        const img = document.createElement('img');
        const button = document.createElement('button');
        text.textContent = title;
        img.src = this.url+backdrop_path;
        button.textContent = 'Add to cart';
        card.appendChild(text);
        card.appendChild(img);
        card.appendChild(button);
        return card;
    }
    render(){
        const frag = document.createDocumentFragment('frag');
        this.list.forEach(element => {
            frag.appendChild(this.Create(element));
        });
        this.dom.appendChild(frag);
    }
}
