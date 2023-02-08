import './card-location.scss'
import Trophy from '../../../../icons/trophy.svg'
import Like from '../../../../icons/like.svg'

function CardLocation() {
  return (
    <div className='card-location'>
      <div>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <span><b>2 miles</b> away</span>
      </div>
      <div>
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <span><b>6 years</b> of experience</span>
      </div>
    </div>
  );
}

export default CardLocation;