import './info-pill.scss'

function InfoPill({name}) {
  return (
    <div className='info-pill'>
      <span>{name}</span>
    </div>
  );
}

export default InfoPill;