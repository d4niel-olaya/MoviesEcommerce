import { Render } from "../Render/main";
import { CarrouselV2 } from "../carrousel/carrouselv2";
import { CarrouselBootstrap } from "../carrousel/carrousel_bootstrap";
export class Product extends Render
{
    /**
     * 
     * @param {Array} obj 
     * @param {HTMLElement} dom 
     * @param {Array} casting 
     * @param {Array} movie 
     */
    constructor(obj, dom, casting, movie){
        super()
        this.obj = obj; // Movies recommended array
        this.url =  'https://image.tmdb.org/t/p/w500'; // Url api
        this.dom = dom; // Main div
        this.casting = casting // Casting array
        this.movie = movie // Movie
        this.render()
        // this.renderRecommends()
        // this.renderCast()
    }
    /**
     * 
     * @param {HTMLElement} div 
     * @returns  {HTMLElement}
     */
    CreateRecommended(div){
        const frag = document.createDocumentFragment();
        this.obj.forEach(Element =>{
            frag.appendChild(this.CreateMovieCard(Element));
        });
        div.appendChild(frag);
        return div;
    }

    CreateCasting(div)
    {
        const frag = document.createDocumentFragment();
        this.casting.forEach(ele =>{
            frag.appendChild(this.CreateActor(ele));
        })
        div.appendChild(frag)
        return div;
    }
    /**
     * Render Casting
     * @param {HTMLDivElement} mainDom Div container
     * 
     */
    renderCasting(mainDom){
        const container = document.createElement('section')
        container.setAttribute('class', 'casting');
        mainDom.appendChild(this.CreateCasting(container))
    }
    /**
     * Render Recommends movies
     * @param {HTMLDivElement} mainDom Div container
     * @param {Array} array Api query (Movie recommends)
     */
    renderRecommends(mainDom){
        const container = document.createElement('section');
        container.setAttribute('class', 'recommends');
        mainDom.appendChild(this.CreateRecommended(container))
    }   
    /**
     * Render main movie, recommended and casting
     * @render HTMLElement
     * @return {void}
     */
    render(){
        const fragR = document.createDocumentFragment();
        const fragCast = document.createDocumentFragment();
        const containerMovies = document.createElement('section');
        containerMovies.setAttribute('class', 'recommends')
        const containerCasting = document.createElement('section');
        containerCasting.setAttribute('class', 'casting');
        this.dom.appendChild(this.cardMovie(this.movie)) 
    }
    /**
     * Render Carrousel (splidejs)
     * @returns {void}
     */
    renderRecommendsCar(){
        const imgs = this.obj.map(this.createImg)
        const schema = `
            <div class="carousel-inner">
                ${imgs.join('')}
                <button class="carousel-control-prev" type="button" data-bs-target="#recomendados" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#recomendados" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `
        const title = `
            <h1 style="text-align:center">Peliculas recomendadas</h1>
        `;
        const div = document.createElement('div');
        div.setAttribute('id', 'recomendados');
        div.setAttribute('class', 'carousel slide')
        // div.setAttribute('role', 'group')
        div.setAttribute('data-bs-ride', 'carousel');
        div.insertAdjacentHTML('afterbegin', schema)
        div.insertAdjacentHTML('afterbegin', title)
        this.dom.appendChild(div);
        console.log(this.casting)
    }
    /**
     * Generate img
     * @param {Object} Data
     * @returns {InnerHTML} splide li
     */
    createImg = ({id,title,backdrop_path, overview}) =>{
        let act = '';
        if(this.obj[0].id == id) act = 'active'
        return `
            <div class="carousel-item ${act}">
                <a href="?id=${id}" style="display:block">
                    <img src="${this.url}${backdrop_path}" class="d-block w-100" alt="${title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${title}</h5>
                        <p>${overview}</p>
                    </div>
                </a>
            </div>`
    }
    /**
     * 
     * @param {Object} Objeto
     * @returns {InnerHTML} String HTML
     */
    createActor = ({id,name,profile_path}) =>{
        return `
            <li class="splide__slide">
                <img src="${this.url}${profile_path}" alt="${name}">
                <div style="text-align:center">
                    ${name}
                </div>
            </li>
        `
    }
    /**
     * Render Casting
     * @returns {void}
     */
    renderCastCar(){
        const cast = this.casting.map(this.createActor);
        const schema = `
            <div class="splide__track">
                <ul class="splide__list">
                    ${cast.join('')}
                </ul>
            </div>
        `
        const $section = document.createElement('section');
        const $title = `<h1 style="text-align:center">Casting</h1>` // TíTulo (casting)
        $section.setAttribute('class', 'splide')
        $section.setAttribute('id', 'casting')
        $section.insertAdjacentHTML("afterbegin", schema);
        $section.insertAdjacentHTML("afterbegin", $title);
        this.dom.appendChild($section);
        console.log(cast.join('').trim());
    }
}

