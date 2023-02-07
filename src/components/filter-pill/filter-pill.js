import TimesSVG from '../../icons/times.svg'
import './filter-pill.scss'

function FilterPill() {
  return (
    <>
      <div className='filter-pill'>
        <span>Pet friendly</span>
        <button type="button" aria-label="Remove pet friendly filter">
          <img src={TimesSVG} alt='Remove'/>
        </button>
      </div>
    </>
  );
}

export default FilterPill;