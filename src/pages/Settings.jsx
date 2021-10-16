import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from '../сomponents/CustomButton.jsx'
import ProgressBar from '../сomponents/ProgressBar.jsx'
import InputField from "../сomponents/InputField.jsx";
import './Settings.scss';

export default function Settings(props) {
    const [repo, setRepo] = useState('');
    const [buildCommand, setBuildCommand] = useState('');
    const [branch, setBranch] = useState('');
    const [timeToSynchronize, setTimeToSynchronize] = useState(0);

    const [isValid, setIsValid] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
   
    const history = useHistory()
    const time = 1000 // millisec

    const reset = () => {
        setRepo('')
        setBuildCommand('')
        setBranch('')
        setTimeToSynchronize(0)
    }
    const isNumberValid = (number) => {
        number = Number(number)
        if( number <= 0 ) return false
        if( !Number.isInteger(number) ) return false
        return true
    }
    const validateForm = () => {
        setIsValid(!!repo && !!buildCommand && isNumberValid(timeToSynchronize))
    }
    const submitForm = () => {
        setIsFormSubmitted(true)
        setTimeout(() => {
            console.log("SAVED");
            localStorage.setItem('isSetUp', true)
            history.push("/")
        }, time*2)
    }
    const cancel = () => {
        reset()
    }

    useEffect(validateForm, [repo, buildCommand, timeToSynchronize])
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

    return (
        <main className="wrapper settings">
            { isFormSubmitted && <ProgressBar time={time}/>}
                    
            <header
                className='header'
            >
                School CI Server
            </header>

            <h3>Settings</h3>
            <p>Configure repository connection and synchronization settings.</p>
            

            <form className="form">
                {   
                    formFields.map((field, index) =>
                        <InputField 
                            key={index}
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
                    loading={isFormSubmitted}
                    otherStyleOptions="sm-full-width"
                />
                <CustomButton 
                    title='Cancel'
                    onClick={cancel}
                    backgroundColor='secondary'
                    otherStyleOptions="sm-full-width"
                />
            </div>

        </main>
    );
}