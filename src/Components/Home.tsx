import React, { useState } from 'react'
import '../App.css'
import { homePropsType } from '../Types/QuizTypes'
export const Home: React.FC<homePropsType> = ({ setShowquiz, setShowHome, handlehome }) => {
    let [total, setTotal] = useState(10);
    let [cat, setCat] = useState(9);
    let [levl, setLevl] = useState("easy");

    // const handleChange = (ev: any) => {
    //     console.log(ev.target.value);
    //     setTotal(ev.target.value);
    //     setCat(ev.target.value);
    //     setLevl(ev.target.value);
    // }
    // console.log(total);
    // console.log(cat);
    // console.log(levl);
    
    return (<>
        <div className="container-fluid  ">
            <div className="modal-dialog">
                <div className="modal-content home">



                    <form className="htmlForm-api">
                        <div className="modal-header">
                            <h2 className="htmlForm-signin-heading">Quiz Info</h2>
                        </div>
                        <div className="modal-body">

                            <label htmlFor="trivia_amount">Number of Questions:</label>
                            <select name="trivia_category" className="form-control"

                                onChange={(e) => { setTotal(+e.target.value) }} >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                            </select>
                            <br />

                            <label htmlFor="trivia_category">Select Category: </label>
                            <select name="trivia_category" className="form-control"
                                 onChange={ (e) => { setCat(+e.target.value)}}
                            >
                                <option value="any">Any Category</option>
                                <option value="9">General Knowledge</option><option value="10">Entertainment: Books</option><option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>		</select>

                            <br />

                            <label htmlFor="trivia_difficulty">Select Difficulty: </label>
                            <select name="trivia_difficulty" className="form-control"
                                onChange={ (e) => { setLevl(e.target.value)}}
                            >
                                <option value="any">Any Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                            <br />
                            <button className="btn btn-lg btn-primary btn-block" type="submit"
                                onClick={(e: React.FormEvent<EventTarget>) => {
                                    e.preventDefault();
                                    setShowquiz(true)
                                    setShowHome(false)
                                    handlehome(e, total, cat, levl)

                                }
                                }
                            >Start Quiz</button>
                        </div>


                        <br />

                    </form>
                </div>
            </div>
        </div >
    </>);
}
