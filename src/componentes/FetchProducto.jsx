
import React from "react"

const FetchProducto = ({prod}) => {

    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={prod.image} className="card-img-top" alt={prod.nombre} style={{width: "18rem"}} />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                
            </div>
        </div>
    )
    
}

export default FetchProducto
