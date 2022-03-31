import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Question, QuestionType } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quiz-components/QuizList";
import { QuestionList } from "../quiz-components/QuestionList";
import { Question } from "../interfaces/question";
import ApplicationSketch from "./PicOne.jpg";
import MY_QUIZES from "../data/quizzes.json";
import MY_QUESTIONS from "../data/quiz-questions.json";

const QUESTIONS = MY_QUESTIONS as Question[];

const myQuizes = MY_QUIZES.map(
    (quiz): Quiz => ({
        ...quiz
    })
);
const myQuestions = QUESTIONS.map(
    (question): Question => ({
        ...question
    })
);

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(myQuizes);
    const [questions, setQuestions] = useState<Question[]>(myQuestions);
    // type ChangeEvent = React.ChangeEvent<
    //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    // >;
    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }
    function deleteQuiz(id: string) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }
    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id == id ? newQuestion : question
            )
        );
    }
    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter((question: Question): boolean => question.id != id)
        );
    }
    return (
        <div className="quizzer">
            <h3>Quizzer</h3>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <QuestionList
                questions={questions}
                editQuestion={editQuestion}
                deleteQuestion={deleteQuestion}
            ></QuestionList>
            <div>
                <Button>Add Quiz</Button>
            </div>
            <div>
                <h3>Pieces Added to Site:</h3>
                <ul>
                    <li>Both Quiz and Question Components</li>
                    <li>Created interfaces for quiz</li>
                    <li>Created RecordQuestions and Quiz</li>
                    <li>Got edit buttons to allow editing</li>
                </ul>
            </div>
            <div className="sketch">
                <img src={ApplicationSketch} width="800" height="800" />
            </div>
        </div>
    );
}
