import './StartScreen.scss';
import CustomButton from '../сomponents/CustomButton.js'
import settings from '../assets/icons/settings.png'
import ciServerLogo from '../assets/ciServerLogo.png'
import {Link} from "react-router-dom";

let linkOptions = { color: 'inherit', textDecoration: 'inherit'}

function StartScreen(props) {
    return (
      <>
        <main className="wrapper start-screen">
            
            <header
                className='header'
            >
                <h1 className="repo-title">School CI Server</h1>
                <div className="buttons">
                    <CustomButton 
                        title="Settings"
                        style='secondary'
                        icon={settings}
                    />
                </div>
            </header>
            
            <div className="centered-content">
                <img src={ciServerLogo} alt="" />
                <p>
                    Configure repository connection
                    and synchronization settings
                </p>
                <Link to="/settings" style={linkOptions}>
                    <CustomButton 
                        title="Open Settings"
                    />
                </Link>
            </div>
            
        </main>
      </>
    );
  }

export default StartScreen;
