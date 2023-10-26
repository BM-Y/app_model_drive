import {useState, useEffect}from 'react'
import {Produit}from './Produit'





export function List(){

    const [list , setList]= useState()

    useEffect(() =>{
        fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
        .then(res=>res.json())
        .then((data)=>setList(data))
    },[])

    console.log(list)
    return (
        <>
        {list.map((elem)=> 
            <span>{elem.nom}</span>
        )}
        </>
    )
}