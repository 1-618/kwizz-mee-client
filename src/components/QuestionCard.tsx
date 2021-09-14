//Importing the dependencies needed in this module
import React from 'react'
import { AnswerObject } from "../App";
import { QuestionWrapper, ButtonWrapper} from "../QuestionCard.styles";

//Describing the data-types of the props being [passed int the QuestionCard
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

const QuestionCard:React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) =>
    //Enclosing elements in a styled component div
    <QuestionWrapper>

    <p className="number">
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}/>
    <div>
        {/*mapping through our answers and retuning them in a button component*/}
        {answers.map(answer => (
            <ButtonWrapper
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer == answer}
                key={answer}>
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}/>
                </button>
            </ButtonWrapper>
        ))}
    </div>
</QuestionWrapper>;

    export  default QuestionCard
