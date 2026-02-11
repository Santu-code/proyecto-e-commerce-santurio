
import React from 'react'
import Item from './Item'

const ItemList = ({datos}) => {
    return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',flexWrap: 'wrap'}}>
        {datos.map((prod)=> <Item key={prod.id} prod={prod} />)}
    </div>
    ) 
}

export default ItemList
