# Here .jsx means js.
# package.json ka script object contains all keys which make us able to read code and run code. 
# These scripts automate tasks like running a development server, building a project, running tests, or deploying.

"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }

# we can use any of these like :
npm run dev
npm run build  # making code production ready
npm run lint
npm run preview



// Vite is also a bundler.

// ! There's two type of dependencies
//?  1: normal dependencies
// noraml dependencies used in production.
//?  2: devDependencies
// such dependencies which is needed while writing code. Such as parcel, bable, vite and all.
