import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [slide, setSlide] = useState(0);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);
  const [restart, setRestart] = useState(true);
  const N=props.slides.length-1;

  const prevSlide=()=>{
    setSlide(slide-1);
    setNext(false);
    if(slide===1){
      setPrev(true);
      // setNext(false);
      setRestart(true);
    }
  }
  const nextSlide=()=>{
    setSlide(slide+1);
    
    if(slide===N-1){
      setNext(true);
    }
    setPrev(false);
    setRestart(false);
  }
  const restartSlide = ()=>{
    setSlide(0);
    setNext(false);
    setPrev(true);
    setRestart(true);
  }
  return (
    <>
    <h1 data-testid="title">{props.slides[slide]['title']}</h1>
    <p data-testid="text">{props.slides[slide]['text']}</p>
    <button data-testid="button-restart" onClick={restartSlide} disabled={restart}>Restart</button>
    <button data-testid="button-prev" onClick={prevSlide} disabled={prev}>Prev</button>
    <button data-testid="button-next" onClick={nextSlide} disabled={next}>Next</button>
    
    </>
  );
}


export default App;
