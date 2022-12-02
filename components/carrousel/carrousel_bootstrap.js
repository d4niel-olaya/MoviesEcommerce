/**
 * 
 * Carrousel Bootstrap class
 * @Class CarrouselBootstrap
 * 
 */

export class CarrouselBootstrap{
    /**
     * 
     * @param {string} id CSS id
     * @param {Array} casting Api query (casting by movie)
     */
    constructor(id, casting){
        this.id = id // Main container id
        this.url= `https://image.tmdb.org/t/p/w500` // Url api to images
        this.casting = casting // Casting Array
        console.log(this.url)
    }
    /**
     * Method to create a carrousel Item
    * @param {object} 
    * @returns {HTMLDivElement} Carrousel item
     */
    createItem({id,name, profile_path}){
        let img = ``;
        if(profile_path === null){
            img=`<p class="d-block w-100">There´s not image/p>`;
        }else{
            const link = 'https://image.tmdb.org/t/p/w500' + profile_path
            img = `<img src="${link}" class="d-block w-100" alt="${name}">`
        }
        const sch = `
            <div class="carrousel-item">
                ${img}
                <div class="carousel-caption d-none d-md-block">
                    <h5>${name}</h5>
                </div>
            </div>
        `   
        return sch;
    }

    /**
     * Generate Carrousel indicators
     * 
     * @returns {HTMLDivElement} Div Element with carrousel indicators
     */
    indicators(){
        let buttons = []; // buttons array
        for(let i=0; i < this.casting.length; i++){  // Loop to generate all buttons
            let button;
            if(i === 1){ // Validating if the current iterator is equal to 1
                button = `<button type="button" data-bs-target="#${this.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide ${i}"></button>`
            }
            else{
                button = `<button type="button" data-bs-target="#${this.id}" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
            }
            buttons.push(button)
        }
        // adding buttons
        const container = `
            <div class="carrousel-indicators">
                ${buttons.join('')}
            </div>           
        `
        return container
    }

    /**
     * Method that returns Items Carrousel container
     * @returns {HTMLDivElement} Container
     */
    containerItems(){
        let items = this.casting.map(this.createItem)
        console.log(items.join(''));
        const container = `
            <div class="carrousel-inner">
                ${items.join('')}
            </div>
        `
        return container
    }
    /**
     * Method to create a main schema
     * @returns {HTMLDivElement} Container carrousel
     */
    createSchema(){
        const container = document.createElement('div');
        container.setAttribute('id', this.id);
        container.setAttribute('class', 'carrousel-slide')
        container.setAttribute('data-bs-ride', 'true')
        return container
    }

}