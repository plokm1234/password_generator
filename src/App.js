import './App.css';
import AdvanceBox from './AdvanceBox';
import { useState } from 'react';

const App = () => {
  const [length, setLength] = useState(0)
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [num, setNum] = useState(false)
  const [sym, setSym] = useState(false)

  const LowerCase = (e) => {
    setLowerCase(true);
  }
  const UpperCase = (e) => {
    setUpperCase(true);
  }
  const Num = (e) => {
    setNum(true);
  }
  const Sym = (e) => {
    setSym(true);
  }
  const Length = (e) => {
    const temp = e.target.value;
    setLength(temp);
  }
  const handleClick = (e) => {
    if(!length && !upperCase && !lowerCase && !num && !sym){
      document.getElementsByClassName("result")[0].textContent = "Please fill in at least one option."
    }
    else if (!length) {
      document.getElementsByClassName("result")[0].textContent = "Please fill in the length."
    }else{
      var base = ""
      const numbers = '0123456789'
      const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz'
      const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"
  
      if(upperCase) base += upperCaseLetters
      if(lowerCase) base += lowerCaseLetters
      if(num) base += numbers
      if(sym) base += specialCharacters
  
      var result = ""
  
      for (let i = 0; i < length; i++) {
        const characterIndex = Math.round(Math.random() * base.length)
        result += base.charAt(characterIndex)
      }
      
      document.getElementsByClassName("result")[0].textContent = result
    }
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <h3 className='result'></h3>
      <AdvanceBox tag="Password length" type="number" func1={Length}/>
      <AdvanceBox tag="Add Uppercase Letters" type="checkbox" func={UpperCase}/>
      <AdvanceBox tag="Add Lowercase Letters" type="checkbox" func={LowerCase}/>
      <AdvanceBox tag="Include Numbers" type="checkbox" func={Num}/>
      <AdvanceBox tag="Include Symbols" type="checkbox" func={Sym}/>
      <button onClick={handleClick}>Generate Password</button>
    </div>
  )
};



export default App;
