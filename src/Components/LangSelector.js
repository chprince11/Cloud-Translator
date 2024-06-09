import '../App.css';

export default function LangSelector() {
  return (
    //language list for the dropdown menu
    <div className="langSelect1">
      <div className="options-container">
        <div className="option">
          <input type="radio" className="radio" id="language1" name="originalLang" />
          <label for="language1">Detect Language</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language2" name="originalLang" />
          <label for="language2">ENGLISH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language10" name="originalLang" />
          <label for="language10">SPANISH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language3" name="originalLang" />
          <label for="language3">PORTUGUESE</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language4" name="originalLang" />
          <label for="language4">RUSSIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language5" name="originalLang" />
          <label for="language5">JAPANESE</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language6" name="originalLang" />
          <label for="language6">FRENCH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language7" name="originalLang" />
          <label for="language7">ITALIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language8" name="originalLang" />
          <label for="language8">SWEDISH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language9" name="originalLang" />
          <label for="language9">INDONESIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language11" name="originalLang" />
          <label for="language11">HUNGARIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language12" name="originalLang" />
          <label for="language12">LATIN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language13" name="originalLang" />
          <label for="language13">LATVIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language14" name="originalLang" />
          <label for="language14">SLOVAK</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language15" name="originalLang" />
          <label for="language15">DUTCH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language16" name="originalLang" />
          <label for="language16">LITHUANIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language17" name="originalLang" />
          <label for="language17">POLISH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language18" name="originalLang" />
          <label for="language18">ROMANIAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language19" name="originalLang" />
          <label for="language19">FINNISH</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language20" name="originalLang" />
          <label for="language20">GERMAN</label>
        </div>
        <div className="option">
          <input type="radio" className="radio" id="language21" name="originalLang" />
          <label for="language21">SWEDISH</label>
        </div>
      </div>

      <div className="selected">Detect Language</div>

      <div className="search-box">
        <input type="text" placeholder="Start Typing..." />
      </div>
    </div>
  )
}