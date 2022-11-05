
export class CarrouselV2
{   
    /**
     * 
     * @param {Array<JSON>} imgs 
     */
    constructor(imgs) {
        this.imgs = imgs
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

    }

    /**
     * Return arrow left
     * @return {HTMLDivElement} Return arrow left
     */
    get arrowLeft() {

    }
} 
