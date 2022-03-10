import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
                {COLORS.map((thisColor: string) => (
                    <Form.Check
                        inline
                        key={thisColor}
                        value={thisColor}
                        type="radio"
                        id="radio-colors"
                        label={thisColor}
                        name="colors"
                        checked={color === thisColor}
                        onChange={updateColor}
                        style={{ backgroundColor: thisColor }}
                    ></Form.Check>
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}.
                    </span>
                </div>
            </div>
        </div>
    );
}
