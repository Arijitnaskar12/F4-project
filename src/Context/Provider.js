import React,{useState} from "react";
import Context from "./Context";

const Provider=(props)=>{
let[fetchData,setFetchData]=useState("");
return(
    <Context.Provider value={{fetchData,setFetchData}}>
        {props.children}
    </Context.Provider>
)
}
export default Provider;