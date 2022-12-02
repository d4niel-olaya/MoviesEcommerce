/**
 * 
 * Carrousel Bootstrap class
 * @Class CarrouselBootstrap
 * @method Render
 */

export class CarrouselBootstrap{
    /**
     * 
     * @param {string} id CSS id
     */
    constructor(id){
        this.id = id // Main container id
        this.url = 'https://image.tmdb.org/t/p/w500' // Url api to images
    }
    /**
     * Method to create a carrousel Item
    * @param {object} 
     */
    createItem({id,title,overview, backdrop_path}){
        const sch = `
            <div class="carrousel-item">
                <img src="${this.url}${backdrop_path}" class="d-block w-100" alt="${title}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${title}</h5>
                    <p>${overview}</p>
                </div>
            </div>
        `
    }

    /**
     * Method to create a main schema
     * @returns {HTMLDivElement} Container carrousel
     */
    createSchema(){
        const container = document.createElement('div');
        container.setAttribute('id', this.id);
        return container
    }

}