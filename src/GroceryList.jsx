import React from 'react'


export default function GroceryList({list,del}){
    

    return(

        <div>{list.map((el)=>(<div key={el.key}><p >{el.item}</p><button onClick={()=>del(el.key)}>Delete</button></div>))}</div>
    )

}