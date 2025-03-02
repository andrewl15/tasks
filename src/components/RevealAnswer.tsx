import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <h3>Reveal Answer</h3>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
