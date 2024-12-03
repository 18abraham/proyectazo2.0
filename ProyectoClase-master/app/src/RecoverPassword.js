import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

export const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const onChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    return (
        <Container>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Ingresa tu correo electronico:</Card.Title>
                    <Form.Control className='mt-3 mb-3' name="email" placeholder='Ingrese su correo'
                        onChange={onChange}
                    />
                    <Button>Recuperar contraseña</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
