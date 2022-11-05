import { Render } from "../Render/main";



export class Product extends Render
{
    constructor(obj, dom, casting, movie){
        super()
        this.obj = obj;
        this.url =  'https://image.tmdb.org/t/p/w500';
        this.dom = dom;
        this.casting = casting
        this.movie = movie
        this.render()
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


}

