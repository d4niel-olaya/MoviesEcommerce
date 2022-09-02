import { get } from "../../service/api";


export class Shopping
{
    constructor(dom,movies){
        this.movies = movies;
        this.dom = dom
    }

    CreateItem({id,title,img}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie');
        container.innerHTML = `
        <img src="${img}" class="img">    
        <span class="title">${title}</span>
        <a id="remove">X</a>    
        `;
        const remove = container.children[2];
        this.Remove(remove);
        return container;
    }

    Remove(item){
        item.addEventListener('click', () =>{
            alert('vas borrar este elemento');
        })
    }
    render(){
        const frag = document.createDocumentFragment();
        this.movies.forEach(element => {
                frag.appendChild(this.CreateItem(element));
           });
        this.dom.appendChild(frag);
    }

}