/*
Partes del carrousel

1) Imagenes
2) Flechas derecha - izq
3) Indicador (O O O O) dependiendo de la cantidad de imgs
4) Scroll (barra) o Scroll mantenido 
*/

export class Carrousel
{
    constructor(imagenes,dom){
        this.imagenes = imagenes;
        this.dom = dom;
        this.url = 'https://image.tmdb.org/t/p/w500';
    }
    StateIndex(){
        const container = document.createElement('div');
        const frag = document.createDocumentFragment();
        const lon = this.imagenes.length;
        for(let i = 0; i < lon; i++){
            frag.appendChild(this.Circle);
        }
        container.appendChild(frag);
        return container;
    }

    get Circle(){
        const circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        return circle;
    }
    Card({id,title,backdrop_path}){
        const img = document.createElement('img');
        img.setAttribute('id', 'image');
        img.setAttribute('data-index', '0');
        img.setAttribute('src', this.url+backdrop_path);
        return img;
    }
    Arrow(direction){
        const arrow = document.createElement('img');
        let type = '';
        direction === 'R'? type = '../../assets/icons/right.svg' :
        type = '../../assets/icons/back-arrow-comb 2.svg';
        arrow.setAttribute('src', type);
        arrow.setAttribute('data-arrow', direction);
        this.ChangeImg(arrow);
        return arrow;
    }
    ChangeImg(arrow){
        arrow.addEventListener('click', () =>{
            const imgToChange = arrow.parentElement.children[1];
            let index = parseInt(imgToChange.getAttribute('data-index'))
            const typeArrow = arrow.getAttribute('data-arrow');
            typeArrow == 'R'? index++ : index--;
            const path = this.imagenes[index].backdrop_path;
            imgToChange.setAttribute('src', this.url+path);
            imgToChange.setAttribute('data-index', index.toString());
            return;
        })
    }
    Render(){
        const frag = document.createDocumentFragment();
        const container = document.createElement('section');
        container.setAttribute('class','carrousel');
        frag.appendChild(this.Arrow('L'));
        frag.appendChild(this.Card(this.imagenes[0]));
        frag.appendChild(this.Arrow('R'));
        container.appendChild(frag);
        this.dom.appendChild(container);
        this.dom.appendChild(this.StateIndex());
    }
}