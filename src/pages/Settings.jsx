import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from '../сomponents/CustomButton.jsx'
import InputField from "../сomponents/InputField.jsx";
import './Settings.scss';

export default function Settings(props) {
    const [repo, setRepo] = useState('');
    const [buildCommand, setBuildCommand] = useState('');
    const [branch, setBranch] = useState('');
    const [timeToSynchronize, setTimeToSynchronize] = useState(0);

    const [isValid, setIsValid] = useState(false)
    const history = useHistory()

    const reset = () => {
        setRepo('')
        setBuildCommand('')
        setBranch('')
        setTimeToSynchronize(0)
    }

    useEffect(() => {
        setIsValid(validateForm())
    }, [repo, buildCommand, timeToSynchronize])

    const isNumberValid = (number) => {
        number = Number(number)
        if( number <= 0 ) return false
        if( !Number.isInteger(number) ) return false
        return true
    }

    const validateForm = (evt) => {
        return !!repo && !!buildCommand && isNumberValid(+timeToSynchronize)
    }

    const formFields = [
        {
            value: repo,
            setValue: setRepo,
            type: 'text',
            defaultValue: '',
            label: 'Github Repository',
            validator: (x) => {return x !== undefined && x !== ''},
        },
        {
            value: buildCommand,
            setValue: setBuildCommand,
            type: 'text',
            defaultValue: '',
            label: 'Build Command',
            validator: (x) => {return x !== undefined && x !== ''},
        },
        {
            value: branch,
            setValue: setBranch,
            type: 'text',
            defaultValue: '',
            label: 'Main branch',
            validator: () => true,
        },
        {
            value: timeToSynchronize,
            setValue: setTimeToSynchronize,
            type: 'number',
            defaultValue: 0,
            label: 'Synchronize every',
            validator: isNumberValid,
        }
    ]

    const submitForm = () => {
        console.log("SAVED");
        localStorage.setItem('isSetUp', true)
        history.push("/")
    }

    const cancel = () => {
        reset()
    }

    return (
        <main className="wrapper settings">
                    
            <header
                className='header'
            >
                School CI Server
            </header>

            <h3>Settings</h3>
            <p>Configure repository connection and synchronization settings.</p>

            <form className="form">
                {   
                    formFields.map((field) =>
                        <InputField 
                            value={field.value}
                            onChange={field.setValue}
                            validator={field.validator}        
                            label={field.label}
                            type={field.type}
                        />
                    )
                }
            </form>
            
            <div className="buttons">
                <CustomButton 
                    title='Save'
                    disabled={!isValid}
                    onClick={submitForm}
                    otherStyleOptions="sm-full-width"
                />
                <CustomButton 
                    title='Cancel'
                    onClick={cancel}
                    style='secondary'
                    otherStyleOptions="sm-full-width"
                />
            </div>

        </main>
    );
}