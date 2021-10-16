import './BuildHeader.scss'
import CustomButton from './CustomButton'

import play from '../assets/icons/play.png'
import settings from '../assets/icons/settings.png'

import {Link} from "react-router-dom";

function BuildHeader(props) {
    return ( 
        <header
            className='build-header'
        >
            <h1 className="repo-title">{props.title}</h1>
            <div className="buttons">
                <CustomButton 
                    title="Run build"
                    icon={play}
                    backgroundColor='secondary'
                />
                <Link to="/settings">
                    <CustomButton 
                        backgroundColor='secondary'
                        icon={settings}
                    />
                </Link>
            </div>
        </header>
    );
  }

  export default BuildHeader