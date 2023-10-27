
import {useState}from 'react'
import {Quantity}from'./Quantity.jsx'


export function Produit({product}){
    

    return(
    
    <article>

        <img src={product.image} alt="236" />
        <h2>{product.nom}</h2>

    </article>
    )
}