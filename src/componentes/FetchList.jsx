
import React from "react"
import FetchProducto from "./FetchProducto"

const FetchList = ({productos}) => {

    return(
        <div>
            {productos.map((prod)=> <FetchProducto key={prod.id} prod={prod} />)}
        </div>
    )
    
}

export default FetchList
