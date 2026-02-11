import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { getUnProducto } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        getUnProducto(id)
        .then((res)=> setDetalle(res))
        .catch((errorr)=> console.log(errorr) )
    },[id])
    return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <ItemDetail detalle={detalle}/>
    </div>
    )
}

export default ItemDetailContainer
