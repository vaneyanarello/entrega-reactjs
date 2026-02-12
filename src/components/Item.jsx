import React from 'react'
import { Button, Card } from 'react-bootstrap'
import '../assets/styles/Item.css'

const Item = ({prod}) => {
  return (
    <div>
     <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.short_description} 
        </Card.Text>
          <p>{prod.price} €</p>
        <Button className='card-button' variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
