import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>What color is my underwear?</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                Correct ?: {choice === expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}
