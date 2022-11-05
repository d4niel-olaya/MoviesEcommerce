import { Render } from "../Render/main";
export class CarrouselV2 extends Render
{   
    /**
     * 
     * @param {Array<JSON>} imgs 
     * @param {HTMLDivElement} carrousel
     */
    constructor(imgs, carrousel) {
        super();
        this.imgs = imgs
        this.carrousel = carrousel
        this.render();
    }
    /**
     * 
     * Render Carrousel
     * @returns {HTMLElement} Render HTMLElement
     *
     */
    render() {
        const dom = this.dom;
        const containerimg = document.createElement('div');
        containerimg.setAttribute('class','imgs');
        const frag = document.createDocumentFragment()
        dom.appendChild(this.arrowLeft);
        this.imgs.forEach(ele =>{
            frag.appendChild(this.CreateMovieCard(ele));
        })
        containerimg.appendChild(frag)
        dom.appendChild(containerimg)
        dom.appendChild(frag);
        dom.appendChild(this.arrowRight)
        this.carrousel.appendChild(dom);
        
    }
    /**
     * Returns carrousel container
     * @returns {HTMLDivElement} Carrousel Container
     */
    get dom(){
        const container = document.createElement('div')
        container.setAttribute('class', 'carrousel');
        return container;
    }

    /**
     * Returns arrow container
     * @returns {HTMLDivElement} Container arrow 
     */
    get domArrow() {
        const div = document.createElement('div');
        div.setAttribute('class', 'dom-arrow')
        return div
    }
    /**
     * Returns arrow rigth
     * @returns {HTMLDivElement} Return arrow rigth
     */
    get arrowRight() {
        const div = this.domArrow;
        const arrow = document.createElement('span');
        const icon = document.createElement('img');
        icon.src = '../../assets/icons/arrow_rigth.svg';
        arrow.appendChild(icon);
        this.moveCarrousel(div)
        div.appendChild(arrow);
        return div
    }
    /**
     * Return arrow left
     * @return {HTMLDivElement} Return arrow left
     */
    get arrowLeft() {
        const div = this.domArrow;
        const arrow = document.createElement('span');
        const icon = document.createElement('img');
        icon.style.transform = "rotate(-180deg)";
        icon.src = '../../assets/icons/arrow_rigth.svg';
        arrow.appendChild(icon);
        this.moveCarrousel(div);
        div.appendChild(arrow);
        return div;

    }
    /**
     * @param {HTMLDivElement} arrow
     * @returns {Event} Onclick event
     */
    moveCarrousel(arrow) {
        arrow.addEventListener('click', ()=>{
            alert('a');
        })
    }
} 
