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
     * @param {HTMLDivElement} dom Div
     * @param {string} titleSection Title of carrousel in the dom
     */
    constructor(id, casting, dom, titleSection){
        this.id = id // Main container id
        this.casting = casting // Casting Array
        this.dom = dom // Div container 
        this.firts = casting[0].name || casting[0].title
        this.url= `https://image.tmdb.org/t/p/w500` // Url api to images
        this.titleSection = titleSection 
        this.renderSchema()
    }
    /**
     * Method to create a carrousel Item
    * @param {object} 
    * @returns {HTMLDivElement} Carrousel item
     */
    createItem(id,name,source){
        let params = { // object with proterties that prolly will be changed
            active:'carousel-item',
            img:'',
            link:''
        }
        if(this.firts === name){ // Validating if the object passed, its the first in the casting array 
            params.active = 'carousel-item active'
        }

        params.link = 'https://image.tmdb.org/t/p/w500' + source
        params.img = `<img src="${params.link}" class="d-block w-100" alt="${name}">`

        const sch = `
            <div class="${params.active}">
                ${params.img}
                <div class="carousel-caption d-none d-md-block">
                    <h4>${name}</h4>
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
     * Returns a h3 title
     * @returns {InnerHTML} title
     */
    get createTitle(){
        const title = `<h3 style="text-align:center">${this.titleSection}</h3>`;
        return title
    }
    /**
     * Method that returns Items Carrousel container
     * @returns {HTMLDivElement} Container
     */
    containerItems(){
        let items = [] // Actors array
        this.casting.forEach(element =>{
            items.push(this.createItem(element.id, element.name || element.title, element.profile_path || element.backdrop_path))
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
    get createSchema(){
        const container = document.createElement('div');
        container.setAttribute('id', this.id);
        container.setAttribute('class', 'carousel slide')
        container.setAttribute('data-bs-ride', 'false')
        container.insertAdjacentHTML('afterbegin', this.createTitle)
        container.insertAdjacentHTML('beforeend', this.indicators() + this.containerItems())
        // container.innerHTML = this.indicators() + this.containerItems()
        console.log(container);
        return container;
    }
    /**
     * Method to render the Carrousel in the dom
     * @render Carrousel
     */
    renderSchema(){
        const carrousel = document.createElement('div');
        carrousel.setAttribute('class', 'w-25 mx-auto') // Bootstrap class
        carrousel.appendChild(this.createSchema)
        this.dom.appendChild(carrousel);
    }

}