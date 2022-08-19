import React, { useEffect, useState } from 'react';
import './App.css';
import { QuizAPI } from './Services/QuizAPI'
import { QuestionType } from './Types/QuizTypes'
import { QuestionCard } from './Components/QuestionCard'
import { Home } from './Components/Home'
function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setscore] = useState(0)
  let [showResult, setShowResult] = useState(false);
  let [showquiz, setShowquiz] = useState(false);
  let [showHome, setShowHome] = useState(true);
  let [QuestionAanswer, setQuestionAanswer] = useState('');

  // for Home
  let [totalQuestions,settotalQuestions] = useState(10);
  let [category,setcategory] = useState(9);
  let [level,setlevel] = useState("easy");

  // let totalQuestions:number=0;
  // let category:number=9;
  // let level:string='easy';
  const handleChange = (e: React.FormEvent<EventTarget>, totalQuestions: number, category: number, level: string) => {
    e.preventDefault();
    console.log(totalQuestions);
    console.log(category);
    console.log(level);
    settotalQuestions(totalQuestions);
    setcategory(category);
    setlevel(level);
  }
  
  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await QuizAPI(totalQuestions, category, level)
      setQuiz(questions);

    }
    fetchData();
  }, [level,totalQuestions,category])
  
  

  // Callback
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    console.log(userAns);
    let currentQuestion: QuestionType = quiz[currentStep];
    console.log('correct Answer is ' + currentQuestion.answer + '___users Answer ' + userAns);
    // if(currentQuestion.answer){
      setQuestionAanswer(currentQuestion.answer);
    // }
    //for score
    if (userAns == currentQuestion.answer) {
      setscore(++score);

    }
    //for next Question
    
    
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      setShowResult(true);
      alert("Questions Completed")
      setCurrentStep(0);
    }
  }
  if (showResult) {

    return (<>
      <h1>Quiz App</h1>
      <div className="container-fluid " >
        <div className="modal-dialog">
          <div className="modal-content result">
            <div className="modal-header">
              <h3><span className="label label-warning" id="qid">Result</span> </h3>
              <h3>{`Your Score is ${score} Out of ${quiz.length}`}</h3>
            </div>
            <div className="modal-footer text-muted">
              <button id="answer" type="button" className="btn btn-primary btn-lg"
                onClick={(e: React.FormEvent<EventTarget>) => {
                  setShowResult(false);
                  setShowquiz(false)
                  setShowHome(true)
                  setCurrentStep(0);
                }
                }
              >Back</button>
            </div>
          </div>
        </div>
      </div>
    </>)
  }



  if (!quiz.length)
    return <h3>Loading... </h3>
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showHome ?
        <Home
          setShowquiz={setShowquiz}
          setShowHome={setShowHome}
          handlehome={handleChange}
        /> :
        null
      }
      {
        showquiz ?
          <QuestionCard
            options={quiz[currentStep].option}
            question={quiz[currentStep].question}
            currentStep={currentStep}
            callback={handleSubmit}
            quiz={quiz}
            answer={quiz[currentStep].answer}
            category={category}
            QuestionAanswer={QuestionAanswer}
          /> : null
      }
      
    </div>
  );
}

export default App;
