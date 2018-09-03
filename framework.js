//OBJECTS

//OBJECT-PROTOTYPES

//JS-PROTOTYPES

    HTMLElement.prototype.text = function(text){this.innerText = text}
    HTMLElement.prototype.html = function(html){this.innerHTML = html}

//FUNCTIONS

    //element functions
    let getId = (id) => document.getElementById(id);
    let getClass = (className) => document.getElementsByClassName(className);
    let getTag = (tagName) => document.getElementsByTagName(tagName);
    let createElement = (tagName, html='', valueArr='') => {let elem=document.createElement(tagName); elem.html(html);for(let i = 0;i<valueArr.length;i+=2){elem.setAttribute(valueArr[i],valueArr[i+1])}document.body.appendChild(elem)}
    let createImg = (src, valueArr='', width='', height='') => {let elem=document.createElement('img'); elem.src=src; elem.setAttribute('width', width);elem.setAttribute('height', height);for(let i = 0;i<valueArr.length;i+=2){elem.setAttribute(valueArr[i],valueArr[i+1])}document.body.appendChild(elem)}
