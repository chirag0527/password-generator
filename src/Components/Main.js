import { useState } from "react"

export default function Main(){

    const [slider, setSlider] = useState(8)

    const [checkedValue, setCheckedValue] = useState(0)

    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecial, setIncludeSpecial] = useState(false);

    const [finalPassword, setFinalPassword] = useState('')

    function handleChange1(event){
      setSlider(event.target.value)
    }

    function handleChange2(event){
        const name = event.target.name
        switch (name) {
            case 'uppercase':
              setIncludeUppercase(event.target.checked)
              if(event.target.checked){
                setCheckedValue(checkedValue => checkedValue+1)
              }else{
                setCheckedValue(checkedValue=>checkedValue-1)
              }
              break
            case 'lowercase':
              setIncludeLowercase(event.target.checked)
              if(event.target.checked){
                setCheckedValue(checkedValue => checkedValue+1)
              }else{
                setCheckedValue(checkedValue=>checkedValue-1)
              }
              break
            case 'numbers':
              setIncludeNumbers(event.target.checked)
              if(event.target.checked){
                setCheckedValue(checkedValue => checkedValue+1)
              }else{
                setCheckedValue(checkedValue=>checkedValue-1)
              }
              break
            case 'special':
              setIncludeSpecial(event.target.checked)
              if(event.target.checked){
                setCheckedValue(checkedValue => checkedValue+1)
              }else{
                setCheckedValue(checkedValue=>checkedValue-1)
              }
              break
            default:
              break
          }
    }
    
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
        
    function generatePassword(){

      let lowercase = 'abcdefghijklmnopqrstuvwxyz'
      let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let numbers = '01234567890123456789'
      let special = '!@#$%^&*!@#$%^&*!@#$%^&*'  
      let generatedPassword = ""


      if(includeUppercase){
        generatedPassword += uppercase 
      }
      if(includeLowercase){
        generatedPassword += lowercase
      }
      if(includeNumbers){
        generatedPassword += numbers 
      }
      if(includeSpecial){
        generatedPassword += special
      }

      generatedPassword = generatedPassword.split("")
      shuffleArray(generatedPassword)

      setFinalPassword(generatedPassword.slice(0,slider))
    }

    
    
    return(
      <div>
      <div className="password-main">
            <p><b>Password Generator</b></p>
            <div className="password">
                <p><b>{finalPassword == '' ? 'P4$5W0rD!' : finalPassword}</b></p>
            </div>
        </div>
        <div className="main"> 
        <div className="slider-component">
            <div className="character-length">
                <p className="smol-text">Character Length</p>
                <p className="characterLength">{slider}</p>
            </div>
            <div class="slidecontainer">
            <input type="range" min="8" max="20" defaultValue="8" 
            class="slider" id="myRange" onChange={handleChange1}
            />
            </div>
        </div>
        <form>
            <label className="container" onChange={handleChange2}>Include Uppercase Letters
                <input type="checkbox" className="checkbox" name="uppercase"></input>
                <span class="checkmark"></span>      
            </label>
            <label className="container" onChange={handleChange2}>Include Lowercase Letters
                <input type="checkbox" className="checkbox" name="lowercase"></input>
                <span class="checkmark"></span>
            </label>
            <label className="container" onChange={handleChange2}>Include Numbers
                <input type="checkbox" className="checkbox" name="numbers"></input>
                <span class="checkmark"></span>
            </label>
            <label className="container" onChange={handleChange2}>Include Symbols
                <input type="checkbox" className="checkbox" name="special"></input>
                <span class="checkmark"></span>
                </label>
        </form>
        <div className="strength-container">
            <p>STRENGTH</p>
            <div className="strength-level">
            <div className="strength-block" id="block1" 
            style={{ backgroundColor: checkedValue >= 1 ? 'red' : 'inherit' }}></div>
            <div className="strength-block" id="block2" 
            style={{ backgroundColor: checkedValue >= 2 ? 'red' : 'inherit' }}></div>
            <div className="strength-block" id="block3" 
            style={{ backgroundColor: checkedValue >= 3 ? 'red' : 'inherit' }}></div>
            <div className="strength-block" id="block4" 
            style={{ backgroundColor: checkedValue >= 4 ? 'red' : 'inherit' }}></div>
            </div>
        </div>
        <button className="btn" disabled={checkedValue<1} onClick={generatePassword}>GENERATE</button>
        </div>
        </div>
    )
}