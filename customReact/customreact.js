function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    /*
        for(const prop in reactElements.props){
            if(prop === children) continue;
            domElement.setAttribute(prop, reactElements.props[prop])
        }
    */

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit'
}

//document.getElementById()
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
