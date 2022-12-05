

export class Render
{


    /**
     * Render movie card
     * @param {Object} Object id, title, backdrop_path(url image), overview
     * @param {String} type default or normal
     * @returns {HTMLDivElement} Div element
     */

    CreateMovie({id,title,backdrop_path, overview}, type='default')
    {
        const container = document.createElement('article');
        let detail = `<a href="../../pages/product/index.html?id=${id}">Ver Detalles</a>`
        let info = `
        <h2>${title}</h2>
        <div class="overview">
            ${overview}
        </div>`
        container.setAttribute('class', 'movie');
        if(type!="default") detail = '';
        const items = `
        ${info}
        <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}">
        ${detail}
        `;
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }   
    /**
     * Create bootstrap card
     * @param {object} MovieJSON
     * @returns {HTMLElement} Section element
     */
    cardMovie({id,title,backdrop_path, overview}){
        const container = document.createElement('article');
        container.setAttribute('class', 'card mx-auto w-50');
        const html = `
            <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${overview}</p>
            </div>
        `   
        container.insertAdjacentHTML('afterbegin', html);
        return container
    }
    /**
     * 
     * @param {JSON} param0
     * @returns {HTMLDivElement} Div element 
     */
    CreateMovieCard({id,title,backdrop_path, overview}){
        const container = document.createElement('article');
        container.setAttribute('class', 'movie-card')
        const items =  `
        <img class="img-card" src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}">
        `
        container.insertAdjacentHTML('afterbegin', items);
        return container;
    }
    CreateActor({name, profile_path})
    {
        const container = document.createElement('article');
        container.setAttribute('class', 'actor');
        const items = `<img src="${this.url+profile_path}">
                <p>${name}</p>`;
        container.insertAdjacentHTML('afterbegin', items);
        return container
    }

    Create(data, options)
    {
        const tpCtn = options.container;
        const ctn = document.createElement(tpCtn);
        return ctn;
    }
}