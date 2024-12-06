import React from 'react'
import { Card } from 'react-bootstrap'

export const Cards = ({title,urlImg,desc}) => {
  return (
    <Card style={{width:"18rem"}} className='m-3'>
        <Card.Body>
            <Card.Img src={urlImg}/>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
        </Card.Body>
    </Card>
  )
}
