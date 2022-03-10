import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [attempt, setAttempt] = useState<number>(3);
    const [reqAttempt, setAttemptRequest] = useState<string>("0");
    function desideButton(): boolean {
        if (attempt <= 0) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of attempts: {attempt}</span>
            <div>
                <Form.Group controlId="setAttemptByRequest">
                    <Form.Label>Increase attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={reqAttempt}
                        onChange={(event: ChangeEvent) =>
                            setAttemptRequest(
                                event.target.value.length !== 0
                                    ? event.target.value
                                    : "0"
                            )
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttempt(attempt - 1)}
                    disabled={desideButton()}
                >
                    use
                </Button>
                <Button
                    onClick={() => setAttempt(attempt + parseInt(reqAttempt))}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
