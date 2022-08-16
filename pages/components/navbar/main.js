import NavTemplate from './index.html?raw';
import './style.css';
const Categories = (element) =>{
    element.classList.contains('on') ? 
    element.classList.remove('on') : element.classList.add('on');
}

export function render(dom){
    dom.innerHTML = NavTemplate;
    const btnCategori = document.getElementById('btnCtg');
    const aside = document.getElementById('ctgs');
    btnCategori.addEventListener('click', () =>{
        // console.log(aside.classList.contains('on'));
        Categories(aside);
    });
}