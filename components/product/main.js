
export class Product
{
    constructor(obj, dom){
        this.obj = obj;
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        console.log(this.obj);
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

