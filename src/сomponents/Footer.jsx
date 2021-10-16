import './Footer.scss'

function Footer(props) {
    return ( 
        <footer className="footer">
            <div className="links">
                {
                    props.footerLinks.map((item, index) =>
                        <a 
                            key={index}
                            href={item.url}
                        > {item.title} </a>
                    )
                }
            </div>
            <div className="brand">
                {props.copyright}
            </div>
        </footer>
    );
  }

  export default Footer