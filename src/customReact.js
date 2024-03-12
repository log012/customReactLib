function customRender(Element,container){
    // const createElement=document.createElement(Element.type);
    // createElement.innerHTML=Element.children;
    // createElement.setAttribute('href',Element.props.href);
    // createElement.setAttribute('target',Element.props.target);

    // container.appendChild(createElement);
    const createElement=document.createElement(Element.type);
    createElement.innerHTML=Element.children;
    for(const prop in Element.props){
        if(prop==='children') continue;

        createElement.setAttribute(prop,Element.props[prop]);
    }
    container.appendChild(createElement);
}

const Element={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"Click here to go google.com"
}

const htmlContainer=document.querySelector('#root'); 

customRender(Element,htmlContainer);