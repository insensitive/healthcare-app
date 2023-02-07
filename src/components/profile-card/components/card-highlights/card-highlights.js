import './card-highlights.scss'
import Trophy from '../../../../icons/trophy.svg'
import Like from '../../../../icons/like.svg'

function CardHighlights() {
  return (
    <div className='card-highlights'>
      <div>
        <img src={Trophy} alt='Trophy' />
        <span>Top Rated</span>
      </div>
      <div>
        <img src={Like} alt='Like' />
        <span>12 Recommendations</span>
      </div>
    </div>
  );
}

export default CardHighlights;