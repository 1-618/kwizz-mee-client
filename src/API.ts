import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

//Setting the difficulty levels to constants the correspond to the external api's query parameters
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

//Function that makes a call to our server, takes 2 parameters
export const fetchQuizQuestions = async (amount:number, difficulty:Difficulty) => {
    try {
        const endpoint = `/trivia/${amount}&${difficulty}&type=multiple`;
        const data = await (await fetch(endpoint)).json()
        console.log(data);
        {/*We map through the results and create an object we can use */}
        return data.info.results.map((question:Question) => (
            {
                ...question,
                answers: shuffleArray([
                    ...question.incorrect_answers,
                    question.correct_answer
                ])
            }
        ))
    } catch(error) {
        console.log(error)
    }


}
