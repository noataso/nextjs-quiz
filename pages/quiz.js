import { useState } from "react";
import styles from "../styles/quiz.module.css"
const quiz = () => {
    const [quizNumber,setQuizNumber]=useState(0);
    const [isCorrect,setIsCorrect]=useState(0);
    // const nextQuizNumber=quizNumber+1;
    const [quizs,setQuizs]=useState
    ([
        {
            question:"今日食べたものは？",
            answers:["トマト","レタス","キャベツ","ミカン"],
            correct:"トマト",
        },
        {
            question:"昨日食べたものは？",
            answers:["トマト","レタス","キャベツ","ミカン"],
            correct:"レタス",
        },
        {
            question:"明日食べるものは？",
            answers:["トマト","レタス","キャベツ","ミカン"],
            correct:"ミカン",
        },
    ])
    // const question="今日食べたものは？";
    // const [answers,setAnswers]=useState(["トマト","レタス","キャベツ","リンゴ"])
    // const correct="トマト"
    const handleClick=(e)=>{
        console.log(e.target.textContent)
        const answer=e.target.textContent
        if(quizs[quizNumber].correct===answer){
            alert('正解')
            setIsCorrect((isCorrect)=>isCorrect+1)
        }else{
            alert('不正解')
        }
        if(quizNumber+1<quizs.length){
            setQuizNumber((quizNumber)=>quizNumber+1)
        }else{
            alert('終了！あなたのスコアは'+isCorrect+"/"+quizs.length+"です。")
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.quiz} key={quizs[quizNumber].question}>
                <div className={styles.questionSection}>
                    <div className={styles.question}>{quizs[quizNumber].question}</div>
                </div>
                <div className={styles.answerSection}>
                    {quizs[quizNumber].answers.map((answer)=>{
                        return(
                            <button key={answer} className={styles.answer} onClick={handleClick}>{answer}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default quiz;