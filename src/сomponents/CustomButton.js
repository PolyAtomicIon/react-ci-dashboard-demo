import './CustomButton.scss'

const defaultProps = {
    style: 'primary',
  }

function CustomButton(props) {
    return ( 
        <button 
            className={`custom-button ${props.style || defaultProps.style}`}
            disabled={props.disabled || false}
        >
            { props.icon && <img src={props.icon} alt="" /> }
            { props.title && <span className="title">{props.title}</span> }
        </button>
    );
  }

  export default CustomButton