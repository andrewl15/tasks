import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [answer, setAnswer] = useState<string>("");
    function updateName(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Label>Answer Box</Form.Label>
            <Form.Control value={answer} onChange={updateName} />
            <div>Result: {answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
