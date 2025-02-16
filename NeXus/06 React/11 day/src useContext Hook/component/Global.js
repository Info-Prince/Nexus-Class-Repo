// use createContext to use or make global file

import { createContext } from "react";

const globalFile  = createContext(  "rohit") // createContext argument can take any type of variable. That need to be destructures while using it.

export default globalFile;