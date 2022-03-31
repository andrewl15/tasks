import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RecordQuizControls } from "./RecordQuizControls";
import { QuizEditor } from "./QuizEditor";
import { Quiz } from "../interfaces/quiz";

export function QuizView({
    quiz,
    editQuiz,
    deleteQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <RecordQuizControls
                        changeEditing={changeEditing}
                    ></RecordQuizControls>
                    <i> Number of Questions: {quiz.questions}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
        </Container>
    );
}
