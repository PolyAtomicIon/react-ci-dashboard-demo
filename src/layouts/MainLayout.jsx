import './MainLayout.scss';
export default function MainLayout (props) {
  
    return (
        <div className="layout">
            <header>
            </header> 
            <main>
                {props.children}
            </main>
            {props.footer}
        </div>
    );
}