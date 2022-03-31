import React, { useState } from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { RecordQuestionControls } from "./RecordQuestionControls";
import { Question } from "../interfaces/question";
import { QuestionEditor } from "./QuestionEditor";

export function QuestionView({
    question,
    editQuestion,
    deleteQuestion
}: {
    question: Question;
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
        ></QuestionEditor>
    ) : (
        <RecordQuestionControls
            changeEditing={changeEditing}
        ></RecordQuestionControls>
    );
}
