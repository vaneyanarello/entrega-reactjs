import React from 'react'
import { Button, Card } from 'react-bootstrap'
import '../assets/styles/Item.css'
import { Link } from 'react-router-dom'

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
          <p>{prod?.price?.toFixed(2)} €</p>
        <Link className='card-button btn' variant='primary' to={'/item/'+prod.id}>Ver más</Link>
        {/* <Button className='card-button' variant="primary">Ver más</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
