import { get } from "../../service/api";


export class Shopping
{
    constructor(dom,movies){
        this.movies = movies;
        this.dom = dom
    }

    CreateItem({id,title,img}){
        const container = document.createElement('article');
        container.innerHTML = `
        <p>${title}</p>    
        <img src="${img}">    
        `;
        return container;
    }
    render(){
        const frag = document.createDocumentFragment();
        this.movies.forEach(element => {
                frag.appendChild(this.CreateItem(element));
           });
        this.dom.appendChild(frag);
    }

}