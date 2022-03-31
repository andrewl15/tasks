import React from "react";
import { Button } from "react-bootstrap";

export function RecordQuizControls({
    changeEditing
}: {
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit Quiz
            </Button>
        </div>
    );
}
