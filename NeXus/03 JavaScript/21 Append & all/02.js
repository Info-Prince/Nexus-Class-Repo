//! insertAdjacentHTML()
//! insertAdjacentElement()

// beforebegin : before the element itself.
// afterbegin : inside the element, before it's first child.
// beforeend : Inside the element, after it's last child.
// afterend : After the element itself.

// Want to insert element before ul
const parentElem = document.getElementById("root");
const element4 = document.createElement('div');
element4.innerHTML = "This is newly div create.";

// parentElem.insertAdjacentElement("beforebegin", element4);
// parentElem.insertAdjacentElement("afterbegin", element4);
// parentElem.insertAdjacentElement("beforeend", element4);
// parentElem.insertAdjacentElement("afterend", element4);



// ? have to remove particular child.
parentElem.children[4].remove();
// todo learn about removeChild(node)



// html elements means only html tags
// nodelist means html element as well as text node.