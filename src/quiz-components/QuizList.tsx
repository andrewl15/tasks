import React from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";
import { Stack } from "react-bootstrap";
//import { MovieView } from "./MovieView";

export function QuizList({
    quiz
}: // deleteMovie,
// editMovie,
// setMovieWatched
{
    quiz: Quiz[];
    // deleteMovie: (id: string) => void;
    // editMovie: (id: string, newMovie: Movie) => void;
    // setMovieWatched: (id: string, s: boolean, l: boolean) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quiz.map((quiz: Quiz) => (
                <div key={quiz.id} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quiz}
                        // deleteMovie={deleteMovie}
                        // editMovie={editMovie}
                        // setMovieWatched={setMovieWatched}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
