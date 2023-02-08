import Select, { components } from "react-select";
import Highlighter from 'react-highlight-words';

const localtionOptions = [
  { value: '6', label: 'Churchill Gardens, SW1V 3AA', description: 'London, Westminister' },
  { value: '5', label: 'Churchill Gardens, SW1V 3AA', description: 'London, Westminister' },
  { value: '4', label: 'Churchill Gardens, SW1V 3AA', description: 'London, Westminister' },
  { value: '3', label: 'Botanical Gardens, SW1V 3AA', description: 'London, Westminister' },
  { value: '2', label: 'Marine Gardens, SW1V 3AA', description: 'London, Westminister' },
  { value: '1', label: 'Air Gardens, SW1V 3AA', description: 'London, Westminister' }
]
const Highlight = ({ children, highlightIndex }) => (
  <p className="highlighted-text">{children}</p>
);

const formatOptionLabel = ({label}, {inputValue}) => {
  return (
    <Highlighter
      searchWords={[inputValue]}
      textToHighlight={label}
      highlightTag={Highlight}
    />
  );
}

export const SelectLocation = () => (
  <Select 
    options={localtionOptions}
    components={{ValueContainer, Option}}
    placeholder="Postcode of the care recepient"
    styles={styles}
    formatOptionLabel={formatOptionLabel}
    className="select-postcode"
    isClearable={true}
    aria-labelledby="select-postcode-label"
    inputId="search-postcode"
    autoFocus={true}
    openMenuOnFocus={false}
    maxMenuHeight={175}
  />
)

const ValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        {!!children && (
          <i
            className="fa fa-search"
            aria-hidden="true"
            style={{ position: "absolute", left: 6 }}
          />
        )}
        {children}
      </components.ValueContainer>
    )
  );
};

const styles = {
  valueContainer: base => ({
    ...base,
    paddingLeft: 24,
    borderRadius: 12,
    minHeight: 50
  }),
  option: (styles, { isDisabled, isSelected, isFocused }) => {
		return {
			...styles,
			'backgroundColor': isDisabled ? undefined :
				isSelected ? '#ECEDF9' :
					isFocused ? '#eeeeee' :
						undefined,
			'color': isDisabled ? '#ccc' :
				isSelected ? '#252525' : '#252525',
			'cursor': isDisabled ? 'not-allowed' : 'default',
			'borderBottom': '1px solid #eeeeee',
			'marginTop': '0px',
			'marginBottom': '0px',
			'padding': '10px',
			':active': {
				...styles[':active'],
				backgroundColor: !isDisabled
					? isSelected
						? 'transparent'
						: 'transparent'
					: undefined
			}
		};
	},
  menu: (base) => ({ ...base, position: 'relative' })
};

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div style={{padding: '10px'}}>
        <div className="left" style={{float: 'left', marginRight: '10px'}}><i className="fa fa-map-marker" aria-hidden="true"/></div>
        <div className="right">
          <strong className="title">{props.data.label}</strong>
          <div style={{marginLeft: '20px', marginTop: '10px', color: 'var(--gray-600)'}}>{props.data.description}</div>
        </div>
      </div>
    </components.Option>
  );
};