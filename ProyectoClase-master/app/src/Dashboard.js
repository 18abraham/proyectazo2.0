import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FileEarmarkBarGraphFill, PeopleFill } from 'react-bootstrap-icons';

export const Dashboard = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser()
    }, []);

    const getUser = () => {
        const user = JSON.parse(localStorage.user);
        setUser(user);
    }



    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenido de nuevo {user.name} </Card.Title>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de usuarios registrados: </Card.Title>
                                    <PeopleFill /> 85
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de cuestionarios creados: </Card.Title>
                                    <FileEarmarkBarGraphFill /> 252
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
