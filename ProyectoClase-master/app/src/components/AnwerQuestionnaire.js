import { useState } from "react"
import { Card, Container, Form } from "react-bootstrap"

export const AnwerQuestionnaire = (props) => {
    const [questionnaire, setQuestionnaire] = useState(props.questionnaire)
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{questionnaire.title}</Card.Title>
                    <Card.Text>{questionnaire.description}</Card.Text>
                    <hr />
                    {
                        <Form>
                            {
                                questionnaire.questions.map((question,i) => (
                                    <Form.Group>
                                        <Form.Label>{question.title}</Form.Label>
                                        {
                                            ["checkbox", "radio"].includes(question.type) && (
                                                <Form>
                                                    {question.options.map((option) => (
                                                        <Form.Check
                                                            type={question.type}
                                                            label={option}
                                                            name={`question_${i}`}
                                                        />
                                                    ))}
                                                </Form>
                                            ) || question.type === "text" && (
                                                <Form.Control />
                                            ) || question.type === "select" && (
                                                <Form.Select>
                                                    <option></option>
                                                    {question.options.map((option) => (
                                                        <option>{option}</option>
                                                    ))}
                                                </Form.Select>
                                            )
                                        }
                                    </Form.Group>
                                ))
                            }
                        </Form>
                    }
                </Card.Body>
            </Card>
        </Container>

    )
}
