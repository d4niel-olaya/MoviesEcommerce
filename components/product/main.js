import { Render } from "../Render/main";
import { CarrouselV2 } from "../carrousel/carrouselv2";


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
        this.obj = obj;
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.casting = casting
        this.movie = movie
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
            frag.appendChild(this.CreateMovie(Element, 'default'));
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
        this.dom.appendChild(this.CreateMovie(this.movie, 'normal'))
        this.obj.forEach(el => { // Rendering Recommended movies
            fragR.appendChild(this.CreateMovieCard(el))
        })
        this.casting.forEach(el => {
            fragCast.appendChild(this.CreateActor(el))
        })
        containerMovies.appendChild(fragR);
        containerCasting.appendChild(fragCast);
        this.dom.appendChild(containerMovies);
        this.dom.appendChild(containerCasting);
    }
    /**
     * Render Carrousel (splidejs)
     * @returns {void}
     */
    renderRecommends(){
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
    renderCast(){
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

