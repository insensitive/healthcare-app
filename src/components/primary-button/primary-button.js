import './primary-button.scss'

function PrimaryButton({name, onClick}) {
  return (
    <button onClick={onClick} className='primary-button'>{name}</button>
  );
}

export default PrimaryButton;