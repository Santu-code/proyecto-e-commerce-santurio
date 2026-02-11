import React from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({detalle}) => {
    return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'30px',border:'1px,solid,black',borderRadius:'20px' , width:'600px',gap:'15px'}}>
        <h1>Detalle del: {detalle.nombre} </h1>
        <img src={detalle.image}  alt={detalle.nombre} style={{width:'23rem'}}/>
        <p>{detalle.descripcion}</p>
        <p>{detalle.precio},00 $</p>
        <Link className='btn btn-primary'>Comprar</Link>
    </div>
    )
}

export default ItemDetail
