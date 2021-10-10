import './BuildHeader.scss'
import CustomButton from './CustomButton'

import play from '../assets/icons/play.png'
import settings from '../assets/icons/settings.png'

function BuildHeader(props) {
    return ( 
        <div
            className='build-header'
        >
            <h1 className="repo-title">{props.title}</h1>
            <div className="buttons">
                <CustomButton 
                    title="Run build"
                    icon={play}
                    style='secondary'
                />
                <CustomButton 
                    style='secondary'
                    icon={settings}
                />
            </div>
        </div>
    );
  }

  export default BuildHeader