<!-- props ka alternative hai useContext hook -->

// ! createContext:
const globalFile  = createContext("rohit");
// ! consume context:
const {count, setCount} = useContext(globalFile);
// ! update context:
<globalFile.Provider value = {{count,setCount}}>

</globalFile.Provider>


# Firstly Create the context => with value or empty
const globalFile  = createContext("rohit");
const globalFile  = createContext();
# Provide data to globalFile => So that data can be used by it's decendent component can use it.
<globalFile.Provider value = {{count,setCount}}>
    # All decendent component can directly consume count variable and setCount function.
</globalFile.Provider>
# Consume the data into component.
const {count, setCount} = useContext(globalFile);