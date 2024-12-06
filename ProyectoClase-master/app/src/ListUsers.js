import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Nav, Row, Table } from 'react-bootstrap'
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons'

export const ListUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        //Peticion a DB
        const users = [
            {
                name: "Juan",
                lastName: "Solano",
                email: "juan@edu.mx"
            },
            {
                name: "Luis",
                lastName: "Soria",
                email: "luis@edu.mx"
            },
            {
                name: "Jesus",
                lastName: "Salazar",
                email: "jesus@edu.mx"
            }
        ];
        setUsers(users);
    }


    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Lista de usuarios</Card.Title>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>Correo</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Row className='text-center'>
                                                        <Col>
                                                            <Button>
                                                                <PencilSquare />
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button variant='danger'>
                                                                <Trash3Fill />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    <tr>

                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </Container>
        </>


    )
}
