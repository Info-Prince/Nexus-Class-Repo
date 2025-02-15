// ? How to create an element and append on web page ?

// createElement
// appendChild
// append

function attachElement (content) {
    //create first element
    const element =document.createElement("li");
    element.innerHTML = content;
    // create second element
    const element2 = document.createElement("li");
    element2.innerHTML = content+" V-2.0";

    const parent = document.getElementById('root');
    // 1st way to append only one element
    // parent.appendChild(element);
    // 2nd way to append more than one element
    parent.append(element, element2)
}

attachElement("Node JS")
attachElement("Python")




// ? How to create a text node 
// text node means which element haven't any tag.
// createTextNode

function attachText (content) {
    const text1 = document.createTextNode(content);

    const parent = document.getElementById("root");
    parent.appendChild(text1);
}
attachText("hello coder boys");
attachText("hello coder boys");


// ? How to create a attribute node ? Also attach that attribute with a particular element.

//creating an id attribute
const attribute1 = document.createAttribute("id");
attribute1.value = "first";
//attaching with second list item
const targetElem = document.getElementById("root");
// console.log(targetElem.children);
targetElem.children[1].setAttributeNode(attribute1);

//! parent element ko .children se access krne pr html collection deta hai.


// ? Playing with Attribute
// !access attribute
const elementN = document.getElementById("root");
// console.log(elementN.getAttribute("id"));
// console.log(elementN.getAttribute("class"));
//! Set attribute shortcut.
elementN.setAttribute("custom", "newAttribute")
//! remove attribute
elementN.removeAttribute("class");




// ? List down the ways to add element/node to the DOM.
// appendChild(node1)
// append(node1, node2, ........)
// prepend(node)
// insertBefore(newNode, referenceNode)
// replaceChild(newNode , referenceNode/newNode) : it'll replace child.

const parent = document.getElementById("root");
const element = document.createElement('li');
element.innerHTML = "Hello Dunia";

//! Attach element to the top 
// parent.prepend(element);
//! Attach element to the bottom
// use append
//! attach at a particular place
// use insertBefore
const child2 = parent.children[1];
// parent.insertBefore(element, child2);
//! Replace a particular element
// parent.replaceChild(element, child2);
// same result can be achieved with innerHTML but element will be added to the last
parent.innerHTML += "<li>LOL</li>"


