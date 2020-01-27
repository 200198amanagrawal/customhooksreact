import {useState} from "react";
function useCustomCounter()
{
    const [count,setCount]=useState(0);
    const handleclick=()=>{
        setCount(count+1);
    };
    return{
        count,handleclick
    };
}
export default useCustomCounter;