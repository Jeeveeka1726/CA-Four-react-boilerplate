import React, { useEffect, useState } from 'react'
import questions from '../questions'
import Result from './Result'
import "./Quiz.css"

export default function QuestionBox() {

  let [count,setCount] = useState(0)
  let [score,setScore] = useState(0)
  let [darkTheme,setDarkTheme] = useState(false)

  // to change the background theme of the website
  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#000000" : "#A8A4A4";
    document.body.style.color = darkTheme ? '#FFFFFF' : '#000000';
  }, [darkTheme]);

  // to change  the theme of the container in which questions are there 
  useEffect(()=>{
    let quizContainer = document.getElementById("quizContainer")
    quizContainer.style.backgroundColor =  darkTheme ? "#3E3E3E" : "#D9D9D9",
    quizContainer.style.color= darkTheme ? "#FFFFFF" : "#000000"
  },[darkTheme])

  function changeTheme(){
      let text = document.getElementById("themeButton")
      text.innerText = darkTheme ? "Dark" : "Light"
      setDarkTheme(!darkTheme)
  }

  // all the answerhandlers are to move to the next question and to check if the option is correctly chosen by the user
  // also the scores gets increased if the right option is chosen
  function answerHandlerA(){
    if (questions[count].options[0].isCorrect == true){
      setScore(score+1)
      setCount(count+1)
    } else {
      setCount(count+1)
    }
  }

  function answerHandlerB(){
    if (questions[count].options[1].isCorrect == true){
      setScore(score+1)
      setCount(count+1)
    } else{
      setCount(count+1)
    }
  }

  function answerHandlerC(){
    if (questions[count].options[2].isCorrect == true){
      setScore(score+1)
      setCount(count+1)
    } else {
      setCount(count+1)
    }
  }

  function answerHandlerD(){
    if (questions[count].options[3].isCorrect == true){
      setScore(score+1)
      setCount(count+1)
    } else{
      setCount(count+1)
    }
  }

  // to highlight the question
  function highlight(){
    let ques = document.getElementById("question")
    ques.style.color = "#9F4DD2"
  }

  // to remove the highlight from the question
  function removeHighlight() {
    let ques = document.getElementById('question');
    ques.style.color = "";
  }

  return (
    <div>

    {/* the header part which consists of logo and theme button */}
    <nav>
            <img id='logo' src='/assets/Logo.png' alt="Logo" />
            <button id='themeButton' onClick={changeTheme} style={{backgroundColor: darkTheme ? "#3E3E3E" : "#D9D9D9",
                color: darkTheme ? "#FFFFFF" : "#000000"}}>Dark</button>
        </nav>

    {/* the container for all the questions,options and highlight button */}
    <div id='quizContainer'>
      {
        // ternary operator used to check if the number of questions exceeds the total number of questions it should display the result page
        count > 4 ? (
          <Result score={score}/>
        ) : (
          <div>
            <h3 className='font'> Question {count+1} of 5 </h3>
            <br/>
            <p id='question'>{questions[count].text}</p>
            <div>
              <div className='choice'>
                <button className='choices' onClick={answerHandlerA}>
                  {questions[count].options[0].text}
                </button>
                <button className='choices' onClick={answerHandlerB}>
                  {questions[count].options[1].text}
                </button>
              </div>
              <div className='choice'> 
                <button className='choices' onClick={answerHandlerC}>
                  {questions[count].options[2].text}
                </button>
                <button className='choices' onClick={answerHandlerD}>
                  {questions[count].options[3].text}
                </button>
              </div>
              <div className='buttons'>
                  <button id='highlight_button' onClick={highlight}>Highlight</button>
                  <button id='remove_highlight_button' onClick={removeHighlight}>Remove Highlight</button>
              </div>
            </div>
            {/* for animation of falling snowballs */}
            <div className="snowballs-animation">
        {Array.from({ length: 50 }, (index) => (
          <div
            key={index}
            className="snowballs"
            style={{
              top: `${0}vh`,
              left: `${Math.random() * 100}vw`, // Random left position
              animationDuration: `${Math.random() * 3 + 1}s`, // Random duration
              animationDelay: `${Math.random()}s`, // Random delay
            }}
          ></div>
        ))}
      </div>
          </div>
        )
      }
    </div>
    </div>
  )
}
