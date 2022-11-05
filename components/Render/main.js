

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
        container.setAttribute('class', 'movie');
        if(type!="default") detail = '';
        const items = `
        <h2>${title}</h2>
        <div class="overview">
            ${overview}
        </div>
        <img src="${this.url+backdrop_path}" alt="${title}">
        ${detail}
        `;
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

    CreateItems(container, obj, method)
    {
        const frag = document.createDocumentFragment();
        obj.forEach(element => {
            frag.appendChild(method);
        });
        container.appendChild(frag)
        return container;
    }
}