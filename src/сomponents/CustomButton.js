import './CustomButton.scss'

const defaultProps = {
    style: 'primary',
  }

function CustomButton(props) {
    return ( 
        <button 
            className={`custom-button ${props.style || defaultProps.style}`}
        >
            { props.icon && <img src={props.icon} alt="" /> }
            {props.title}
        </button>
    );
  }

  export default CustomButton