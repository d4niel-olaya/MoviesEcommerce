const CreateCard = ({id,title, backdrop_path}) =>{
    const url = 'https://image.tmdb.org/t/p/w500';
    const card = document.createElement('article');
    const parrafo = document.createElement('p');   
    const img = document.createElement('img');
    parrafo.textContent = title;
    img.src = url+backdrop_path;
    card.appendChild(parrafo);
    card.appendChild(img);
    return card;

}

export function render(dom,listado){
    const frag = document.createDocumentFragment();
    listado.forEach(el=>{
        frag.appendChild(CreateCard(el));
    })
    dom.appendChild(frag);
}