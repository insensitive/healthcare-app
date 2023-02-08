import './radio-button.scss'

function RadioButton() {
  return (
    <>
      <div className='radio-container'>
        <input type="radio" id="hourly" name="drone" value="hourly" defaultChecked/>
        <label htmlFor="hourly">Hourly</label>
      </div>

      <div className='radio-container'>
        <input type="radio" id="overnightly" name="drone" value="overnightly" />
        <label htmlFor="overnightly">Overnightly</label>
      </div>

      <div className='radio-container'>
        <input type="radio" id="Live-in" name="drone" value="Live-in" />
        <label htmlFor="Live-in">Live-in</label>
      </div>
    </>
  );
}

export default RadioButton;