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
        this.renderRecommends()
        this.renderCast()
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
    
    render(){
        const containerMovies = document.createElement('section');
        containerMovies.setAttribute('class', 'recommends')
        const containerCasting = document.createElement('section');
        const ctn = document.createElement('section');
        console.log(this.CreateActor(this.casting[0]));
    }
    /**
     * Render Carrousel (splidejs)
     * @returns {void}
     */
    renderRecommends(){
        const imgs = this.obj.map(this.createImg)
        const schema = `
            <div class="slider1 splide__track">
                <ul class="slider1 splide__list">
                    ${imgs.join('')}
                </ul>
            </div>
        `
        const title = `
            <h1 style="text-align:center">Peliculas recomendadas</h1>
        `;
        const div = document.createElement('section');
        div.setAttribute('class', 'slider1 splide')
        div.setAttribute('role', 'group')
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
    createImg = ({title,backdrop_path, overview}) =>{
        return `
                <li class="slider1 splide__slide">
                    <img src="${this.url}${backdrop_path}" alt="${title}">
                    <div style="text-align:center">
                        ${title}
                    </div>
                </li>`
    }
    /**
     * 
     * @param {Object} Objeto
     * @returns {InnerHTML} String HTML
     */
    createActor = ({id,name,profile_path}) =>{
        return `
            <li class="casting splide__slide">
                <img src="${this.url}${profile_path}" alt="${name}">
            </li>
        `
    }

    renderCast(){
        const cast = this.casting.map(this.createActor);
        const schema = `
            <div class="casting splide__track">
                <ul class="casting splide__list">
                
                ${cast.join('')}
                </ul>
            </div>
        `
        const $section = document.createElement('section');
        $section.setAttribute('class', 'casting splide')
        $section.insertAdjacentHTML("afterbegin", schema);
        this.dom.appendChild($section);
        console.log(cast.join('').trim());
    }
}

