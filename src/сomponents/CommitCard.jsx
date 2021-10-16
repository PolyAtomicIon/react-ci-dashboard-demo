import './CommitCard.scss'
import calendar from '../assets/icons/calendarLight.png';
import stopwatch from '../assets/icons/stopwatchLight.png';
import user from '../assets/icons/userLight.png';
import codeCommit from '../assets/icons/codeCommitLight.png';
import done from '../assets/icons/done.png';
import fail from '../assets/icons/fail.png';
import clock from '../assets/icons/clock.png';

let commitStatus = {
    'done': {
        icon: done,
        color: 'green'
    }, 
    'fail': {
        icon: fail,
        color: 'red'
    }, 
    'pending': {
        icon: clock,
        color: 'primary'
    }
}

function CommitCard(props) {
    return ( 
        <button className="commit" tabIndex="0" onClick={() => props.onClick(props.id)}>
            <div className="commit-status">
                <img src={commitStatus[props.commitStatus || 'done'].icon} alt="" />
            </div>
            <div className="main-info">
                <div className="commit-title">
                    <a 
                        tabIndex="-1"
                        href='#' 
                        className={
                            `commit-id 
                            text-${commitStatus[props.commitStatus || 'done'].color}
                        `}> 
                        #{props.id} 
                    </a> 
                    {props.title}
                </div>
                <div className="commit-details">
                    <a 
                        href='#' 
                        tabIndex="-1"
                    > 
                        <img src={codeCommit} alt="" />
                        {props.branchName} 
                        <span className="text-grey ml-1"> {props.commitId} </span> 
                    </a>
                    <a 
                        href='#'
                        tabIndex="-1"
                    > 
                        <img src={user} alt="" />
                        {props.author} 
                    </a>
                </div>
            </div>
            <div className="secondary-info">
                <div className="secondary-info-item"> 
                    <img src={calendar} alt="" />
                    {props.date}
                </div>
                <div className="secondary-info-item"> 
                    <img src={stopwatch} alt="" />
                    {props.time}
                </div>
            </div>
        </button>
    );
  }

  export default CommitCard