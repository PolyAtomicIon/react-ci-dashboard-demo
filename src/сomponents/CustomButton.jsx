import './CustomButton.scss'

function CustomButton(props) {
    return ( 
        <button 
            className={
                `custom-button 
                ${props.style}
                ${props.otherStyleOptions || ''}
            `}
            disabled={props.disabled}
            onClick={() => props.onClick ? props.onClick() : {}} 
        >
            { props.icon && <img src={props.icon} alt="" /> }
            { props.title && <span className={props.icon ? 'title-with-icon' : 'title'}>{props.title}</span> }
        </button>
    );
  }
// inline grid

CustomButton.defaultProps = {
    'style': 'primary',
}

export default CustomButton