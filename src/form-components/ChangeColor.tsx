import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
    const COLORS = [
        "red",
        "blue",
        "purple",
        "turquoise",
        "cyan",
        "orange",
        "green",
        "white"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
                <Form.Group controlId="elements">
                    <Form.Label>List of Colors</Form.Label>
                    <Form.Check
                        //inline
                        data-testid="colored-box"
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="change-color"
                        label={color}
                    >
                        {COLORS.map((color: string) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </Form.Check>
                </Form.Group>
                <div>You have chosen {color}.</div>
            </div>
        </div>
    );
}
