import FooterTemplate from './index.html?raw';

export function render(dom){
    dom.innerHTML = FooterTemplate;
}