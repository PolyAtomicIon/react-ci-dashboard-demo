import './Footer.scss'

function Footer(props) {
    return ( 
        <footer className="footer">
            <div className="links">
                <a href="">Support</a>
                <a href="">Learning</a>
                <a href="">Русская версия</a>
            </div>
            <div className="brand">
                @2020 Your Name
            </div>
        </footer>
    );
  }

  export default Footer