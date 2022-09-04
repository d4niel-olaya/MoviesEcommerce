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
    Card({id,title,backdrop_path}){
        const img = document.createElement('img');
        img.setAttribute('src', this.url+backdrop_path);
        return img;
    }
    Arrow(direction){
        const arrow = document.createElement('img');
        let type = '';
        direction === 'R'? type = '../../assets/icons/arrow_rigth.svg' :
        type = '../../assets/icons/back-arrow-comb 2.svg';
        arrow.setAttribute('src', type);
        return arrow;
    }
    Render(){
        const frag = document.createDocumentFragment();
        const container = document.createElement('section');
        const ctnImgs = document.createElement('div');
        ctnImgs.setAttribute('class', 'imgs')
        container.setAttribute('class', 'carrousel');
        this.imagenes.forEach(element => {frag.appendChild(this.Card(element))});
        ctnImgs.appendChild(frag);
        container.appendChild(this.Arrow('L'));
        container.appendChild(ctnImgs);
        container.appendChild(this.Arrow('R'));
        this.dom.appendChild(container);
    }
}