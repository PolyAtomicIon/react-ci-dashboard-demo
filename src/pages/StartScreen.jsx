import './StartScreen.scss';
import CustomButton from '../сomponents/CustomButton.jsx'
import settings from '../assets/icons/settings.png'
import ciServerLogo from '../assets/ciServerLogo.png'
import Header from '../сomponents/Header.jsx'
import {Link} from "react-router-dom";

let linkOptions = { color: 'inherit', textDecoration: 'inherit'}

function StartScreen(props) {
    return (
      <>
        <main className="wrapper start-screen">

            <Header 
                title="School CI Server"
                isTitleLight={true}
            >
                <Link to="/settings" style={linkOptions}>
                    <CustomButton 
                        title="Settings"
                        backgroundColor='secondary'
                        icon={settings}
                    />
                </Link>
            </Header>
            
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
