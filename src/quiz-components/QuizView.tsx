import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { SongList } from "./SongList";
import { Quiz } from "../interfaces/quiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    {/* <MovieRating rating={movie.rating}></MovieRating> */}
                    <i> Number of Questions {quiz.questions}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                    {/* <SongList songs={movie.soundtrack}></SongList> */}
                </Col>
                {/* <Col>
                    <MovieTrailer id={movie.id}></MovieTrailer>
                </Col> */}
            </Row>
        </Container>
    );
}
