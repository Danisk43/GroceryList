import React from 'react'
import GroceryInput from "./GroceryInput.jsx"
import GroceryList from "./GroceryList.jsx"
import { v4 as uuid } from 'uuid';

export default function Grocery(){
    const [list,setList]=React.useState([]);
    const[item,setItem]=React.useState("");
    

    function addtolist(){
        let obj={
            item:item,
            key:uuid(),
        }
        setList([...list,obj])
        setItem("")
    }
    function addtoitem(e){
        setItem(e.target.value)

    }

    function del(id){
        setList(list.filter((item)=>item.key!=id))
    }

    return(
        <>
        <GroceryInput addtoitem={addtoitem} item={item}  addtolist={addtolist} />
        <GroceryList list={list} del={del}/>
        </>
    )

}