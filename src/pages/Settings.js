import React, { useState } from "react";
import './Settings.scss';
import { useHistory } from "react-router-dom";
import CustomButton from '../сomponents/CustomButton.js'

export default function Settings(props) {
    const [repo, setRepo] = useState('');
    const [bcommand, setBcommand] = useState('');
    const [branch, setBranch] = useState('');
    const [timeToSynchronize, setTimeToSynchronize] = useState(0);

    const [isFormValid, setIsFormValid] = useState(false);

    const history = useHistory()

    const isNumberValid = (number) => {
        if( number <= 0 ) return false
        if( !Number.isInteger(number) ) return false
        return true
    }

    const validate = (evt) => {
        evt.preventDefault();
    
        setIsFormValid(!!repo && !!bcommand && isNumberValid(+timeToSynchronize))
        if( !isFormValid ){
            return
        }   
    }

    const submitForm = () => {
        console.log("SAVED");
        localStorage.setItem('isSetUp', true)
        history.push("/")
    }

    const cancel = () => {
        history.push("/")
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
            <label>
                GitHub repository *
                <input 
                    type="text"
                    value={repo}
                    onChange={(event) => {setRepo(event.target.value); validate(event)} } 
                />
            </label>
            <label>
                Build Command *
                <input 
                    type="text" 
                    value={bcommand}
                    onChange={(event) => {setBcommand(event.target.value); validate(event)} } 
                />
            </label>
            <label>
                Main Branch
                <input 
                    type="text" 
                    value={branch}
                    onChange={(event) => {setBranch(event.target.value); validate(event)} } 
                />
            </label>
            <label>
                Synchorinzize every:
                <input 
                    type="number" 
                    value={timeToSynchronize}
                    onChange={(event) => {setTimeToSynchronize(event.target.value); validate(event)} } 
                />
            </label>
        </form>
        
        <div className="buttons">
            <CustomButton 
                title='Save'
                disabled={!isFormValid}
                eventToCall={submitForm}
                otherStyleOptions="sm-full-width"
            />
            <CustomButton 
                title='Cancel'
                eventToCall={cancel}
                style='secondary'
                otherStyleOptions="sm-full-width"
            />
        </div>

    </main>
    );
}