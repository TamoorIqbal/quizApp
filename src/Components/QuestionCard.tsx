import React, { useState, useRef } from 'react'
import './../App.css'
import { questionPropsType } from './../Types/QuizTypes'

export const QuestionCard: React.FC<questionPropsType> = ({ answer,QuestionAanswer, question, options, callback, category, currentStep, quiz }) => {
    let [selectedAns, setSelectedAns] = useState("");
    let [answers, setanswers] = useState("");
    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
        setanswers(answer)
        // if (answer) {
        //     alert("moon")
        //     ev.target.style.backgroundColor = 'green';
        // }
        // if (selectedAns) {
        //     ev.target.style.backgroundColor = 'red';
        // }
        // console.log(ev.target);

        // backcolor =answer  > 0 ? 'green' : 'red';
    }


    return (<div>
        <div className="container-fluid " >
            <div className="modal-dialog">
                <div className="modal-content" >


                    <div className="modal-header">
                        <h3><span className="label label-warning" id="qid">Question: {currentStep + 1} / {quiz.length}</span> </h3>
                        <h3>{question}</h3>
                    </div>
                    {/* <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}> */}
                    <div className="modal-body">

                        <div className="quiz" id="quiz" data-toggle="buttons">
                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label " ><i className="glyphicon glyphicon-chevron-right"></i></span>
                                <input type="radio" name="q_answer" value={options[0]} onChange={handleSelection} checked={selectedAns === options[0]} required />{options[0]}</label>

                            <label className="element-animation2 btn btn-lg btn-primary btn-block"><span className="btn-label "  ><i className="glyphicon glyphicon-chevron-right"></i></span>
                                <input type="radio" name="q_answer" value={options[1]} onChange={handleSelection} checked={selectedAns === options[1]} required />{options[1]}</label>

                            <label className="element-animation3 btn btn-lg btn-primary btn-block"><span className="btn-label "  ><i className="glyphicon glyphicon-chevron-right"></i></span>
                                <input type="radio" name="q_answer" value={options[2]} onChange={handleSelection} checked={selectedAns === options[2]} required />{options[2]}</label>

                            <label className="element-animation4 btn btn-lg btn-primary btn-block"><span className="btn-label "  ><i className="glyphicon glyphicon-chevron-right"></i></span>
                                <input type="radio" name="q_answer" value={options[3]} onChange={handleSelection} checked={selectedAns === options[3]} required />{options[3]}</label>
                        </div>
                    </div>
                    <div className="modal-footer text-muted ">
                       
                    <div className="row">
                        <div className="col-sm-8 m">
                            <div className="card green ">
                            <div className="card-body">
                                    <h4 className="card-title">Answer : <span style={{fontWeight:"800",fontSize:"20px"}}>{answers}</span></h4>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-4 m">
                            <div className="card">
                                <div className="card-body">
                                <button onClick={(e: React.FormEvent<EventTarget>) => {
                            callback(e, selectedAns)
                            // console.log(e.target); 
                            setanswers('')
                        }
                        } id="answer" type="button" className="btn btn-primary btn-lg">Submit</button>
                        {/* <input type="submit" className="submit"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* </form> */}

                </div>
            </div>
        </div>

    </div>
    )
}

