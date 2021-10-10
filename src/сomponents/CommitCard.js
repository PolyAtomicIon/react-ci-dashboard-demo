import './CommitCard.scss'
import calendar from '../assets/icons/calendarLight.png';
import stopwatch from '../assets/icons/stopwatchLight.png';
import user from '../assets/icons/userLight.png';
import codeCommit from '../assets/icons/codeCommitLight.png';
import done from '../assets/icons/done.png';
import fail from '../assets/icons/fail.png';
import clock from '../assets/icons/clock.png';

let commitStatus = {
    done, fail, 
    'pending': clock
}

function CommitCard(props) {
    return ( 
        <div className="commit">
            <div className="commit-status">
                <img src={commitStatus[props.commitStatus || 'done']} alt="" />
            </div>
            <div className="main-info">
                <div className="commit-title">
                    <a href={''} className="commit-id"> #{props.id} </a> 
                    {props.title}
                </div>
                <div className="commit-details">
                    <a href={''}> 
                        <img src={codeCommit} alt="" />
                        {props.branchName} 
                        <span className="text-grey ml-1"> {props.commitId} </span> 
                    </a>
                    <a href={''}> 
                        <img src={user} alt="" />
                        {props.author} 
                    </a>
                </div>
            </div>
            <div className="secondary-info">
                <div className="secondary-info-item"> 
                    <img src={calendar} alt="" srcset="" />
                    {props.date}
                </div>
                <div className="secondary-info-item"> 
                    <img src={stopwatch} alt="" srcset="" />
                    {props.time}
                </div>
            </div>
        </div>
    );
  }

  export default CommitCard