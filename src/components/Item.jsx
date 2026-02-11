import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({prod}) => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.short_description}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
