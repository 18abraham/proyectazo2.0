import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FileEarmarkBarGraphFill, PeopleFill } from 'react-bootstrap-icons';

export const Dashboard = () => {

    const [user, setUser] = useState({});
    const [metrics, setMetrics] = useState({
        numberOfUsers: 0,
        numberOfQuestionnaires: 0
    })

    useEffect(() => {
        getUser()
        getMetrics()
    }, []);

    const getUser = () => {
        const user = JSON.parse(localStorage.user);
        setUser(user);
    }

    const getMetrics = async () => {
        try {
            const res = await axios.get("http://localhost:4000/questionnaire/get-metrics");
            const data = {
                numberOfQuestionnaires: res.data.numberOfQuestionnaires,
                numberOfUsers: res.data.numberOfUsers
            }
            setMetrics(data)
        } catch (error) {
            alert("Hubo un error al obtener las metricas")
        }
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
                                    <PeopleFill /> {metrics.numberOfUsers}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de cuestionarios creados: </Card.Title>
                                    <FileEarmarkBarGraphFill /> {metrics.numberOfQuestionnaires}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
