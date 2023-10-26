
import {useState}from 'react'



export function Produit(){
    const [listProduits , setList]= useState()
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed')

    .then(res=>res.json())
    .then((data)=>setList(data))
    
    console.log(listProduits)

    return 
}