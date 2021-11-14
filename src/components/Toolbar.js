import {Link} from 'react-router-dom';

function Toolbar() {
    return (
        <nav className='toolbar'>
            <Link className='brand-logo' to='/'>
                React Routing App
            </Link>

            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/profile'>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar;
