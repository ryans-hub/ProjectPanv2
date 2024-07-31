import { Link } from 'react-router-dom';


function Navigation() {

    return (

        <nav>
            <ul>
                <li>
                    <Link to='/'>About Me</Link>
                </li>
                <li>
                    <Link to='/project'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navigation;