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
        this.casting = casting // Casting Array
        this.firts = casting[0].name
        this.url= `https://image.tmdb.org/t/p/w500` // Url api to images
    }
    /**
     * Method to create a carrousel Item
    * @param {object} 
    * @returns {HTMLDivElement} Carrousel item
     */
    createItem({id,name,profile_path}){
        let params = { // object with proterties that prolly will be changed
            active:'carousel-item',
            img:'',
            link:''
        }
        if(this.firts === name){
            params.active = 'carousel-item active'
        }

        params.link = 'https://image.tmdb.org/t/p/w500' + profile_path
        params.img = `<img src="${params.link}" class="d-block w-100" alt="${name}">`

        const sch = `
            <div class="${params.active}">
                ${params.img}
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
            if(i === 0){ // Validating if the current iterator is equal to 1
                button = `<button type="button" data-bs-target="#${this.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide ${i}"></button>`
            }
            else{
                button = `<button type="button" data-bs-target="#${this.id}" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
            }
            buttons.push(button)
        }
        // adding buttons
        const container = `
            <div class="carousel-indicators">
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
        let items = [] // Actors array
        this.casting.forEach(element =>{
            items.push(this.createItem(element))
        })
        console.log(items)
        console.log(items.join(''));
        const container = `
            <div class="carousel-inner">
                ${items.join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${this.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${this.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
        container.setAttribute('class', 'carousel slide')
        container.setAttribute('data-bs-ride', 'false')
        container.innerHTML = this.indicators() + this.containerItems()
        console.log(container);
        return container;
    }

}