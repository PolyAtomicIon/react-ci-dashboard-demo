import './Header.scss'

export default function Header(props) {
    return ( 
        <header
            className='header'
        >
            <h1 className={"title " + (props.isTitleLight ? 'secondary-title' : '')}>
                {props.title}
            </h1>
            <div className="buttons">
                {props.children}
            </div>
        </header>
    );
}
