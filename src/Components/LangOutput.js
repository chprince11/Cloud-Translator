import '../App.css';

export default function Navbar() {
  return (
    //list of languages in the dropdown menu
    <div className="langSelect2">
      <div className="options-container2">
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage1" name="translatedLang" />
          <label for="translatedLanguage1">ENGLISH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage2" name="translatedLang" />
          <label for="translatedLanguage2">SPANISH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage3" name="translatedLang" />
          <label for="translatedLanguage3">PORTUGUESE</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage4" name="translatedLang" />
          <label for="translatedLanguage4">RUSSIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage5" name="translatedLang" />
          <label for="translatedLanguage5">JAPANESE</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage6" name="translatedLang" />
          <label for="translatedLanguage6">FRENCH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage7" name="translatedLang" />
          <label for="translatedLanguage7">ITALIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage8" name="translatedLang" />
          <label for="translatedLanguage8">SWEDISH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage9" name="translatedLang" />
          <label for="translatedLanguage9">INDONESIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage11" name="translatedLang" />
          <label for="translatedLanguage11">HUNGARIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage12" name="translatedLang" />
          <label for="translatedLanguage12">LATIN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage13" name="translatedLang" />
          <label for="translatedLanguage13">LATVIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="language14" name="translatedLang" />
          <label for="translatedLanguage14">SLOVAK</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage15" name="translatedLang" />
          <label for="translatedLanguage15">DUTCH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage16" name="translatedLang" />
          <label for="translatedLanguage16">LITHUANIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage17" name="translatedLang" />
          <label for="translatedLanguage17">POLISH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage18" name="translatedLang" />
          <label for="translatedLanguage18">ROMANIAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage19" name="translatedLang" />
          <label for="translatedLanguage19">FINNISH</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage20" name="translatedLang" />
          <label for="translatedLanguage20">GERMAN</label>
        </div>
        <div className="option2">
          <input type="radio" className="radio" id="translatedLanguage21" name="translatedLang" />
          <label for="translatedLanguage21">SWEDISH</label>
        </div>
      </div>
      <div className="selected2">Please Select a Language...</div>

      <div className="search-box2">
        <input type="text" placeholder="Start Typing..." />
      </div>
    </div>
  )
}