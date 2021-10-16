import './InputField.scss'
import { useState } from "react";

function InputField(props) {
    const [isDirty, setIsDirty] = useState(false)

    return ( 
        <label>
            { props.label }
            <input 
                ref={props.parentRef}
                type={props.type} 
                value={props.value}
                onChange={(event) => {
                    setIsDirty(true);
                    props.onChange(event.target.value);
                }}
                placeholder={props.placeholder}
                className={'input-field ' + 
                    (!props.validator(props.value) && isDirty ? 'error' : '')
                }
            />
        </label>
    );
  }

  export default InputField