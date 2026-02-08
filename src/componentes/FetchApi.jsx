

import React,{useEffect, useState} from "react"
import FetchList from "./FetchList"

const FetchApi = () => {

    const [productos, setProductos] = useState([])


    useEffect(()=>{

        fetch('https://69872e0b8bacd1d773ecba0d.mockapi.io/fakeapi/productos')
        .then((respuesta)=> respuesta.json())
        .then((datos)=> setProductos(datos))
        .catch((error)=>console.log(error))

    },[])

    console.log(productos)

    return(
        <div>
            <h1>FetchApi</h1>
            <FetchList productos={productos} />
        </div>
    )
} 

export default FetchApi