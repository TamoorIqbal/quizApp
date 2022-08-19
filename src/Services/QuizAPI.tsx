import { QuestionType, quiz } from "../Types/QuizTypes";

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)


export const QuizAPI = async (totalQuestions: number, category:number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${level}&type=multiple`)
    // const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy');
    let { results } = await res.json();

    const question: QuestionType[] = results.map((questionObj: quiz) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return question;




    // return results;
}
