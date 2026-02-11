import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                    {prod.precio},00 $ <br/>
                    {prod.descripcion}
                </Card.Text>
                <Link to={`/producto/${prod.id}`} className='btn btn-primary' >Informacion</Link>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Item
