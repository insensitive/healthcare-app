import './checkbox-group.scss'

function CheckboxGroup({items}) {
  return (
    <>
      {items.map((item) => {
        return (
          <>
            <div className='checkbox-container'>
              <input type="checkbox" id={item.id} name={item.id} />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          </>
        )
      })}
    </>
  );
}

export default CheckboxGroup;