import React from "react";
import { Button } from "react-bootstrap";

export function RecordQuestionControls({
    changeEditing
}: {
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit Questions
            </Button>
        </div>
    );
}
