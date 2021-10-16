import './CustomButton.scss'
import Spinner from './Spinner.jsx'

function CustomButton(props) {
    return ( 
        <button 
            className={
                `custom-button 
                ${props.loading ? 'secondary' : props.backgroundColor}
                ${props.otherStyleOptions || ''}
            `}
            disabled={props.disabled}
            onClick={() => props.onClick ? props.onClick() : {}} 
        >
            { 
                props.loading 
                    ? <Spinner/> 
                    : 
                    <>
                        { props.icon && 
                            <img src={props.icon} alt="" /> 
                        }
                        { props.title && 
                            <span className={props.icon ? 'title-with-icon' : 'title'}>
                                {props.title}
                            </span> 
                        }
                    </>
            } 
            
        </button>
    );
  }
// inline grid

CustomButton.defaultProps = {
    'backgroundColor': 'primary',
}

export default CustomButton