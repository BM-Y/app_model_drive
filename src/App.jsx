
import './App.css'
import {Carte} from'./compoments/Carte.jsx'
import {List} from './compoments/List.jsx'
import {useState, useEffect}from 'react'







function App() {
  const [list, setList]= useState([])
  const [selected ,setSelected]= useState([])

  useEffect(() =>{
      fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
      .then(res=>res.json())
      .then(data=>setList(data))
  },[])

  function selectProduct(product){
 

  }

  return (

  <>
        <List list={list}/>
        <Carte />
        

  </>
  )
}

export default App
