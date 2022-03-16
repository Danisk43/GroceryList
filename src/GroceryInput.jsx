import React from 'react'
import GroceryList from "./GroceryList"

export default function GroceryInput({addtoitem,addtolist,item}){
    return(
        <>
        <input placeholder="add items" value={item} onChange={(e)=>addtoitem(e)}></input>
        <button onClick={()=>addtolist()}>ADD</button>
        </>
    )
}