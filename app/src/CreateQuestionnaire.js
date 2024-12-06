import React, { useState } from 'react'
import { Card, Container, Form, Row, Col, Button, InputGroup, CloseButton, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { AnwerQuestionnaire } from './components/AnwerQuestionnaire';
import axios from "axios";

export const CreateQuestionnaire = () => {

    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    const defaultQuestion = {
        title: "Pregunta sin titulo",
        type: "radio",
        options: ["Opción 1"],
        isMandatory: false,
    }
    const [createQuestionnaire, setCreateQuestionnaire] = useState({
        title: "Cuestionario vacio",
        description: "Descripcion simple",
        questions: [
            defaultQuestion
        ],
        userId:JSON.parse(localStorage.user)._id
    });
    const onChangeTitle = (e) => {
        e.preventDefault();
        const data = createQuestionnaire;
        data.title = e.target.value;
        setCreateQuestionnaire({ ...data })
    };
    const onChangeBasicFields = (e, index) => {
        const data = createQuestionnaire;
        data.questions[index][e.target.name] = e.target.value;
        setCreateQuestionnaire({ ...data })
    }
    const addOption = (index) => {
        const data = createQuestionnaire;
        data.questions[index].options.push(`Opcion ${data.questions[index].options.length + 1}`)
        setCreateQuestionnaire({ ...data })
    };
    const addQuestion = () => {
        const data = createQuestionnaire;
        data.questions.push(defaultQuestion)
        setCreateQuestionnaire({ ...data })
    };

    const deleteOption = (iq, io) => {
        const data = createQuestionnaire;
        const filteredOptions = data.questions[iq].options.filter((_, i) => i !== io);
        data.questions[iq].options = filteredOptions;
        setCreateQuestionnaire({ ...data });
    }
    const deleteQuestion = (iq) => {
        const data = createQuestionnaire;
        const filteredQuestions = data.questions.filter((_, i) => i !== iq)
        data.questions = filteredQuestions;
        setCreateQuestionnaire({ ...data });
    }

    const sendData = async () => {
        try {
            await axios.post("http://localhost:4000/questionnaire/create", createQuestionnaire)
            alert("Cuestionario creado con exito")
        } catch (error) {
            alert("Todos tienen 10 por sonso yo >:C")
        }
    }

    const onChangeOptionTitle = (e, iq, io) => {
        const data = createQuestionnaire;
        data.questions[iq].options[io] = e.target.value;
        setCreateQuestionnaire({ ...data })
    }
    return (
        <Container>
            <Card className='mb-3 mt-5' border='warning'>
                <Card.Body>
                    <Card.Title>{createQuestionnaire.title}</Card.Title>
                    <Form.Control placeholder='Cambia el nombre de tu cuestionario' name="title" onChange={onChangeTitle} />
                </Card.Body>
            </Card>
            {
                createQuestionnaire.questions.map((q, i) => (
                    <Card className='mb-3' border='primary'>
                        <Card.Body>
                            <Card.Text className='text-end'>
                                {
                                    createQuestionnaire.questions.length != 1 && (
                                        <OverlayTrigger
                                            overlay={<Tooltip>
                                                Eliminar pregunta
                                            </Tooltip>}
                                        >
                                            <CloseButton onClick={() => deleteQuestion(i)} />
                                        </OverlayTrigger>
                                    )
                                }

                            </Card.Text>
                            <Form.Group>
                                <Row className='m-3'>
                                    <Col>
                                        <Form.Control
                                            value={q.title}
                                            name="title"
                                            onChange={(e) => onChangeBasicFields(e, i)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Select
                                            name="type"
                                            onChange={(e) => onChangeBasicFields(e, i)}
                                        >
                                            <option value="radio">Opción multiple</option>
                                            <option value="checkbox">Casilla de verificación</option>
                                            <option value="select">Lista desplegable</option>
                                            <option value="text">Respuesta corta</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col>
                                        <ol>
                                            {
                                                q.options.map((o, io) => (
                                                    <li className='mb-3'>
                                                        <InputGroup>
                                                            <Form.Control
                                                                value={o}
                                                                onChange={(e) => onChangeOptionTitle(e, i, io)}
                                                            />
                                                            {
                                                                q.options.length != 1 && (
                                                                    <Button variant="outline-danger" onClick={() => deleteOption(i, io)}>X</Button>
                                                                )
                                                            }
                                                        </InputGroup>
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                        <Button variant='info' onClick={() => addOption(i)}>Agregar opción</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                ))
            }
            <Row className='m-3'>
                <Col>
                    <Row>
                        <Col className='text-center'>
                            <Button onClick={() => addQuestion()}>Agregar pregunta</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col className='text-center'>
                            <Button variant='success' onClick={() => sendData()}>Guardar cuestionario</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Button onClick={() => setShowQuestionnaire(true)}>Vista previa</Button>
            {
                showQuestionnaire && (
                    <AnwerQuestionnaire questionnaire={createQuestionnaire} />
                )
            }
        </Container>
    )
}
