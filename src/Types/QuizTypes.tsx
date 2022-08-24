import React from "react"

export type QuestionType = {
    question: string,
    answer: string,
    correct_answer: string
    option: string[],
}

export type quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type questionPropsType = {
    question: string,
    currentStep: number,
    options: string[],
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
    quiz: any
    answer: any
    category:number
    QuestionAanswer:string
    

}
export type homePropsType = {
    setShowquiz: any,
    setShowHome: any,
    handlehome: (e: React.FormEvent<EventTarget>,
        totalQuestions: number, category:number, level: string) => void
}
