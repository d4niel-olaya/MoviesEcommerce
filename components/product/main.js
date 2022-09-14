
export class Product
{
    constructor(obj, dom, casting){
        this.obj = obj;
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.casting = casting
        this.render()
    }

    CreateMovie({id,title,backdrop_path}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie');
        const items = `
        <a href="../../pages/product/index.html?id=${id}">Ver Detalles</a>
        <img src="${this.url+backdrop_path}" alt="${title}">
        <p>${title}</p>
        `;
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }
    CreateActor({name}){
        const container = document.createElement('article');
        container.setAttribute('class', 'actor');
        const items = `<p>${name}</p>`;
        container.insertAdjacentHTML('afterbegin', items);
        return container
    }
    CreateRecommended(div){
        const frag = document.createDocumentFragment();
        this.obj.forEach(Element =>{
            frag.appendChild(this.CreateMovie(Element));
        });
        div.appendChild(frag);
        return div;
    }
    render(){
        const containerMovies = document.createElement('section');
        console.log(this.CreateActor(this.casting[0]));
        this.dom.appendChild(this.CreateRecommended(containerMovies));

    }


}

