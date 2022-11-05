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
        this.url = 'https://image.tmdb.org/t/p/w500'
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
        const arr = this.imgs.slice(0,3);
        arr.forEach(ele =>{
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
        this.moveToRight(div)
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
        this.moveToLeft(div);
        div.appendChild(arrow);
        return div;

    }
    /**
     * @param {HTMLDivElement} arrow
     * @returns {Event} Onclick event
     */
    moveToRight(arrow){
        arrow.addEventListener('click', () =>{
            console.log(document.querySelectorAll('.img-card'));
            const arr = document.querySelectorAll('.img-card')
            for(let i  = 0; i < this.imgs.length ; i++){
                if(this.imgs[i+1].backdrop_path != null){
                    arr[i].src = this.url + this.imgs[i+1].backdrop_path
                }
                // console.log(this.imgs[i].backdrop_path);
            }
        })
    }
    /**
     * @param {HTMLDivElement} arrow
     * @returns {Event} Onclick event
     */
    moveToLeft(arrow) {
        arrow.addEventListener('click', ()=>{
            console.log(document.querySelectorAll('.img-card'));
            const arr = document.querySelectorAll('.img-card')
            arr[0].src = this.imgs[1].backdrop_path
            // for(let i  = 0; i < this.imgs.length ; i++){
            //     if(this.imgs[i].backdrop_path != null){
            //         arr[i].src = this.imgs[i+1].backdrop_path
            //     }
            //     // console.log(this.imgs[i].backdrop_path);
            // }
            // console.log(arr[0].src)
            // alert('a'); 
        })
    }
} 
