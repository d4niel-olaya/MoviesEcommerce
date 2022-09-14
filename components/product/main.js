
export class Product
{
    constructor(obj, dom){
        this.obj = obj;
        this.dom = dom;
        console.log(this.obj);
        this.render()
    }

    CreateMovie({id,title}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie');
        const items = `
        <p>${id}</p>
        <p>${title}</p>
        `;
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }
    render(){
        const frag = document.createDocumentFragment();
        const containerMovies = document.createElement('section');
        this.obj.forEach(Element =>{
            frag.appendChild(this.CreateMovie(Element));
        });
        containerMovies.appendChild(frag);
        this.dom.appendChild(containerMovies);

    }


}

