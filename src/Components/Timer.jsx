import {useState, useRef} from 'react'
import './Timer.css'

function Timer() {
    const [info,setInfo]=useState(0);
    const timerId=useRef(0);
    const startTimer=()=>{
    timerId.current= setInterval(()=>{
            setInfo((prevData)=>prevData + 1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(timerId.current)
    }
    const resetTimer=()=>{
        setInfo(info === 0)
    }
  return (
    <div className='timer'>
        <h1>Stop Watch Using reactjs</h1>
        <h2>Timer: {info}</h2>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Timer