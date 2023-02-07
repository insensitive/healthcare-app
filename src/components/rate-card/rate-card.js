import './rate-card.scss'
import Timer from '../../icons/timer.svg'

function RateCard() {
  return (
    <div className="rate-card">
      <div className="title">
        <img src={Timer} alt='Hourly'/>
        <span>Hourly</span>
      </div>
      <div className="body">
        <div>Daily</div>
        <div><b>$20</b> per hour</div>
      </div>
    </div>
  );
}

export default RateCard;