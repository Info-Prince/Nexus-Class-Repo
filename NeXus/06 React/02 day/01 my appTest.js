const element = React.createElement("h1", {id:"first", className:"heading", style: {backgroundColor: "blue", fontSize:"20px", color:"pink"}}, "hellow Coder Army");
const element2 = React.createElement("h2", {id:"second", className:"headTwo", style: {backgroundColor:"black", fontSize:"20px", color:"white"}}, "To kaise hai aap log");

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(element);
// reactRoot.render(element2)

// ! Jis root element me data render hoga wha ka sara data erase ho jayega and newly rendered data present ho jayega.

// ? Render both element using div element
const div1 = React.createElement("div", {}, [element, element2]);
reactRoot.render(div1)


// Javascript enable us to write html code into it And it has been enable because of JSX not for the react.
// ? What is JSX ?
// JSX work is to convert html code into react.

// ? Production Ready Code ?
// Optimize code
// Comment and space remove krdo
// remove unusable code.
// The main purpose of making code production ready is to decrease code file size.

// ? What is Bundler
// Bundler read all file's code and make them production ready code.
// Webpack, vite, parcel
// code optimization react khud nhi karta hai, react ke paas bundler hota hai and whi code ko optimize karta hai.

// ? react ek preset object hai , which contains numerous functionality. However code ko optimize karne ka kaam bundler (Webpack, vite, parcel etc...) karta hai and sometime user get access to write html code into js file that functionality has not been provided by react but it has been provided by JSX.


// ? What's npm ?
// npm is a javaScript registory, 
// js development related all code has been there.

// ? Why lots of file downloading while installing parcel file only.
// Since parcel can't perform work of code optimization itself. It also use other file and libraries. It means parcel is also dependent to other firle or resources.
// Parcel jiske upar dependent hai wo file v modules folder me aaya aur dependent folder ka dependent file v module file ke andar aaya.
// Yha dependancy ka chain bna hai, each or some file have some dependancy to other files.


// ? version: 18.2.3
// It means that version: Major.Minor.Patch
// When software new update came with patch changes, it means some bus has been fixed.
// When software new update came with minor changes, it means some new functionality has been added into software However all old function work same as earlier.
// When software new update came with major changes, it means Code has been chnaged with enhanced functionality. Here old functionality earased and if same function availabe then it means that that functionality has been improved.

// ? "react-dom": "^19.0.0"
// ^ symbol means , it will accept upto minor changes only. Major changes will not be accepted.

// ?sometime it's seen that =>  "react-dom": "~19.0.0"
// ~ symbol means, it will accept upto patches changes only. Minor and major changes not accepted longer.


// ! When we havn't node_modules file and having package-lock.json and package.json then what will be happen when installing npm ?
//  In This situation when we'll install npm then all module will be install which depencencies has been used in package-lock.json
// And if node_modules as well as package-lock.json not present and there's package.json present and when we install npm then all updated file will be downloaded which dependencies would have been used in package.json. Latest file will be install due to package.json contain all file version with ^ symbol means that accept upto minor changes.
