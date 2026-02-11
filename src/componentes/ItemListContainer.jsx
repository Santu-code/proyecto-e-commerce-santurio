import { getProductos } from '../mock/asyncMock'
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({mensaje})=> {
    const [datos, setDatos]= useState([])
    const {category}= useParams()
    useEffect(()=>{
        getProductos()
        .then((respuesta)=>{
            if(category){
                setDatos(respuesta.filter((prod)=> prod.categoria === category))
            }else{
                setDatos(respuesta)}
        }) 
        .catch((error)=> console.log(error))
    },[category])

    return(
        <div>
            <h1>{mensaje}{category && <span style={{textTransform:'capitalize'}}>{category}</span>}</h1>
            <ItemList datos={datos}/>
        </div>
    )
}

export default ItemListContainer