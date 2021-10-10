import './CustomButton.scss'

const defaultProps = {
    style: 'primary',
  }

function CustomButton(props) {
    return ( 
        <button 
            className={
                `custom-button 
                ${props.style || defaultProps.style}
                ${props.otherStyleOptions || ''}
            `}
            disabled={props.disabled || false}
            onClick={() => props?.eventToCall()} 
        >
            { props.icon && <img src={props.icon} alt="" /> }
            { props.title && <span className={props.icon ? 'title-with-icon' : 'title'}>{props.title}</span> }
        </button>
    );
  }

  export default CustomButton