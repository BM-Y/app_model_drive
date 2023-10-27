
import {Produit}from './Produit.jsx'



export function List({list}){



    return (

        <>
        {list.map((elem ,index)=> 

           <Produit key={index} product={elem} />
        )}
        </>
    )
}