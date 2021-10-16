import './ProgressBar.scss';
import {useState} from 'react'

export default function Spinner(props){
    
    const [progress, setProgress] = useState(0)

    let period = 10000 / props.time
    
    const update = () => {
        if(progress < 100) 
            setProgress(progress + period)
        else    
            clearTimeout(interval)
    }

    var interval = setTimeout(update, 100);

    return (
        <div className="progress">
            <progress max="100" value={progress}></progress>
            <div className="progress-bg"><div className="progress-bar"></div></div>
        </div>
    )
}