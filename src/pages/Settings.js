import './Settings.scss';
import CustomButton from '../сomponents/CustomButton.js'

function Settings(props) {
    return (
      <>
        <main className="wrapper settings">
            
            <header
                className='header'
            >
                School CI Server
            </header>

            <h3>Settings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet paria</p>
            
            <form className="form" action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="number" />
            </form>
            
            <div className="buttons">
                <CustomButton 
                    title='Save'
                />
                <CustomButton 
                    title='Cancel'
                    style='secondary'
                />
            </div>

        </main>
      </>
    );
  }

export default Settings;
