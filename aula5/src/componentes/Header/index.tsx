import "./style.css"


const Header = ({Title}:{Title:string}) => {

    return(
        <header className="header">
            <h1>{Title}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;