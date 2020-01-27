import React,{Component, useState, useEffect} from "react";
import useCustomCounter from "./Custom";
//import Student from "./student";
function App()
{
   const data=useCustomCounter();
   return(
       <>
<h1>Count up:{data.count}</h1>
<button type="button" onClick={data.handleclick}>Increment</button>
       </>
   )
}
export default App;