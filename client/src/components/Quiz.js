import React, {useState, useEffect} from 'react';

const Quiz = () => {

    const [questions, setQuestions] = usestate([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    // get questions
    const getQuestions = () => {
        console.log("getting questions")
        fetch('http://localhost:5000/api/quiz')
        .then(res => res.json())
        .then(data => setQuestions(data))
    }

    // use effect
    useEffect(() => {
        getQuestions()
    }, [])


    //on start button click
    const onStartClick = () => {
        setCurrentQuestion(questions[0].Question)
        setAnswers(currentQuestion.answerOptions)
    }

    // handle answer click

   
    
    
    
    
    
    return(
        <>
        <div className='quiz'>
        <h1>Quiz</h1>
        {/* <img src={}>Quiz</img> */}


        </div>
        </>

    );
};


export default Quiz;