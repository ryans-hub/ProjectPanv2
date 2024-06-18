import { Link } from 'react-router-dom';


function Navigation() {

    return (

        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Me</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contact Me</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navigation;