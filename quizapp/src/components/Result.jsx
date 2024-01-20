import React from 'react'
import "./Quiz.css"

export default function Result(prop) {
  // getting the score from QuestionBox.jsx as a prop
  const score = prop.score
  // calculating the percentage acquired
  const percentage = (score / 5) * 100;

  //to start again 
  function restart(){
    window.location.href = "./QuestionBox.jsx"
  }

  return (
    <div>
      <div>
        {/* for displaying the final score */}
        <div id='resultbox'> 
                <h1 className='font'>Final Score</h1>
                <br />
                <p> {score}/5 is correct</p> 
                <br/>
                <p>Final percentage - {percentage}% </p> 
                <br />
                <button  id='restart' onClick={restart}>TRY AGAIN</button>
        </div>
    </div>
    {/* for animation of falling snowballs */}
    <div className="snowballs-animation">
        {Array.from({ length: 50 }, (index) => (
          <div
            key={index}
            className="snowballs"
            style={{
              top: `${0}vh`, //top start position
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
