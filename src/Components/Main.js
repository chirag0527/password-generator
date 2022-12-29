export default function Main(){
    return(
        <div className="main">
        <div className="slider-component">
            <div className="character-length">
                <p className="smol-text">Character Length</p>
                <p className="characterLength">0</p>
            </div>
            <div class="slidecontainer">
                <input type="range" min="1" max="20" value="8" class="slider"></input>
            </div>
        </div>
        <form>
            <label className="container">Include Uppercase Letters
                <input type="checkbox" className="checkbox"></input>
                <span class="checkmark"></span>      
            </label>
            <label className="container">Include Lowercase Letters
                <input type="checkbox" className="checkbox"></input>
                <span class="checkmark"></span>
            </label>
            <label className="container">Include Numbers
                <input type="checkbox" className="checkbox"></input>
                <span class="checkmark"></span>
            </label>
            <label className="container">Include Symbols
                <input type="checkbox" className="checkbox"></input>
                <span class="checkmark"></span>
                </label>
        </form>
        <div className="strength-container">
            <p>STRENGTH</p>
            <div className="strength-level">
                <div className="strength-block"></div>
                <div className="strength-block"></div>
                <div className="strength-block"></div>
                <div className="strength-block"></div>
            </div>
        </div>
        <button className="btn">GENERATE</button>
        </div>
    )
}