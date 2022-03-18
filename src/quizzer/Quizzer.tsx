import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Question, QuestionType } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quiz-components/QuizList";
import ApplicationSketch from "./PicOne.jpg";
import MY_QUIZES from "../data/quizzes.json";

const myQuizes = MY_QUIZES.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function Quizzer(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [quiz, setQuiz] = useState<Quiz[]>(myQuizes);
    // type ChangeEvent = React.ChangeEvent<
    //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    // >;
    return (
        <div className="quizzer">
            <h3>Quizzer</h3>
            <div>
                <QuizList
                    quiz={quiz}
                    // editMovie={editMovie}
                    // deleteMovie={deleteMovie}
                    // setMovieWatched={setMovieWatched}
                ></QuizList>
            </div>
            <div>
                <Button>Add Quiz</Button>
            </div>
            <div className="sketch">
                <img src={ApplicationSketch} width="800" height="800" />
            </div>
        </div>
    );
}
