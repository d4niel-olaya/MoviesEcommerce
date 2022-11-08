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
        this.renderCarrousel()
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
        this.dom.appendChild(this.CreateMovie(this.movie, 'normal'))
        // this.dom.appendChild(this.CreateRecommended(containerMovies));
        // this.dom.appendChild(this.CreateCasting(containerCasting));
    }
    /**
     * Render Carrousel (splidejs)
     * @render 
     */
    renderCarrousel(){
        const imgs = this.obj.map(this.createImg)
        const schema = `
            <div class="splide__track">
                <ul class="splide__list">
                    ${imgs.join('')}
                </ul>
            </div>
        `
        const div = document.createElement('section');
        div.setAttribute('class', 'splide')
        div.insertAdjacentHTML('afterbegin', schema)
        this.dom.appendChild(div);
        
        
    }
    /**
     * Generate img
     * @param {Object} Data
     * @returns {InnerHTML}
     */
    createImg = ({title,backdrop_path}) =>{
        return `
                <li class="splide__slide">
                    <img src="${this.url}${backdrop_path}" alt="${title}">
                </li>`
    }
}

