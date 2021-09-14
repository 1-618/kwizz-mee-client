//Importing dependencies needed for this module
import React, {useState} from 'react';
// Components
import QuestionCard from "./components/QuestionCard";
//Types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
//Styles
import { GlobalStyle, Wrapper } from "./App.styles";

//Defining an AnswerObject type
export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}
//We will consistently be receiving 10 questions per quiz
const TOTAL_QUESTIONS = 10;

const App = () => {
    //The application's state will be managed by the following hooks:
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions)

    //Async function initializes a new quiz by calling a number of methods
    const startTrivia = async () => {
        //setting the loading boolean to true so that it displays "loading" text
        setLoading(true);
        //setting the gameOver boolean to false to indicate that the final question has not been answered yet
        setGameOver(false);

        //fetchQuizQuestions function takes 2 parameters: the number of questions and the difficulty
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        //setQuestions method executes the asynchronous call to our server to fetch the quiz questions,
        //and sets the result as questions state
        setQuestions(newQuestions)

        //Upon receiving the results of the api call, the following methods are called:

        //Reset the score to 0
        setScore(0)
        //Reset the userAnswers to an empty array
        setUserAnswers([])
        //Reset the current question to 0
        setQuestionNumber(0)
        //Reset the loading boolean to false so that it removes the "loading.." text
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        //If statement checks that
        if (!gameOver) {
            //Answer clicked by player is set as the value on the clicked button
            const answer = e.currentTarget.value;
            //Answer checked against the value of that question's "correct_answer" field
            const correct = questions[questionNumber].correct_answer === answer
            //If answer passes the comparison, we increment the score using the setScore hook's method
            if(correct) setScore(prev => prev + 1)
            //We save answer in the array for user answers
            const answerObject = {
                question: questions[questionNumber].question,
                //The name and value of these next two fields are the same so we can optionally omit the value
                answer,
                correct,
                correctAnswer: questions[questionNumber].correct_answer,
            };
            //We add the the answer to our array of userAnswers by using the spread operator
            // to shallow copy the other values into the userAnswers array along with the new one
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }
   //The nextQuestion function navigates us through the array of questions in a quiz
    const nextQuestion = () => {
        const nextQuestion = questionNumber + 1
        //move onto the next question as long as we are not on the last question
        if (nextQuestion === TOTAL_QUESTIONS) {
            //When we reach the last question, the gameOver state is set to true
            setGameOver(true)
            //If we are not on the last answer we increment the questionNumber state
        } else {
            setQuestionNumber(nextQuestion)
        }
    }
    {/*Elements that will evaluate to visible UI*/}
  return (
      <>
          {/*Global style component*/}
          <GlobalStyle/>
          {/*Wrapper component from styled components*/}
    <Wrapper>
        <h1>KWIZZ-MEE!</h1>
        {/*We use a ternary operator to ensure button only renders when previous quiz is over*/}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
            Start
        </button>
        ) : null}
        {/*We use a ternary operator to ensure as long as the game is not over, we continue to see the current score */}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {/*While the loading state is set to true, we render the loading text*/}
        {loading && <p>Loading Question...</p>}
        {/*If the questions have been received from the api and the last one has not yet been answered,
        render the questionCard component along wth all the props passed to it*/}
        {!loading && !gameOver && (
            <QuestionCard
                questionNr={questionNumber + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[questionNumber].question}
                answers={questions[questionNumber].answers}
                userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
                callback={checkAnswer}
            />)}
        {/*If the questions have been received from the api, the last one has not yet been answered,
        render a button that  triggers the nextQuestion function.
        Tf one of these conditions is false, dont render the button*/}
        {!gameOver &&
         !loading &&
         userAnswers.length === questionNumber + 1 &&
         questionNumber != TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        ) : null}
    </Wrapper>
      </>
  );
}

export default App;
