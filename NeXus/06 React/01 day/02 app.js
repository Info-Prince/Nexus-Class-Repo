//! Why react and reactDOM file has been kept into different different file.
// Since react is a standalone library.
// Library such as reactDOM, reactNative and all uses react library.


//! Create element using react library

// todo react 17 model
const element = React.createElement("h1",{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));


// todo react 18 model
// It says that firstly get access of root element and render element under root element.
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(element);


// ! Why react 17 model depricated ?
// Since while clicking on a button it was loading all element and before loading if user want to do other operation then he can't until first operation done.
// When we don't create root element and there's 50 cards has to be shown on the screen while clicking on a particular button Then they all will firstly render on the screen and during this user can't perforn any operation and this way ux was very bad. And if we create rootElement then it itself take control to render element on the screen and the time user need to load different element reactElement revoke to load previous element. And this way ux enhanced.


// ? What is CDN ?
// Content Delivery Network.
// Main server ke paas sare data rehte hai, But it just delegate data to multiple cdn's so that it's work load may decrease. main server usually keep dynamic data which changes frequently. for eg, fb likes, comments and all.
// Dynamic data main server pr rakha jata hai And static data nearest cdn pr rakha jata hai.
// photos wagara cdn pr rakha rehta hai. You can see zomato images, that's come from cdn
