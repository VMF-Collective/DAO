// import { API_URL } from '../constants/constants';
import { Link } from 'react-router-dom';

export default function Navbar2() {
    return (
        <header id="topnav" className="defaultscroll sticky bg-white">
            <div className="container">
                {/* Logo container*/}
                <div>
                    <a className="logo" href="index.html">
                        <img src="/src/assets/imgs/logo.png" height={52} alt="" />
                    </a>
                </div>
                <div className="buy-button">
                <Link to="/Join" className="btn btn-primary">Join a Community</Link>
                </div>{/*end login button*/}
                {/* End Logo container*/}
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* Mobile menu toggle*/}
                        <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </div>
                </div>
                <div id="navigation">

                {/* <li className="nav-item"><Link to="/Communities2" className="nav-link">Communities2</Link></li>
                <li className="nav-item"><Link to="/MyCommunity" className="nav-link" >My Community</Link></li> */}
                 

                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                        <Link to="/" className="sub-menu-item">Home</Link>
                        </li>
                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">My Community</a><span className="menu-arrow" />
                            <ul className="submenu">
                                <li><Link to="/ProposalTemplate" className="sub-menu-item">Proposal Details Page</Link></li>
                                <li><Link to="/Members" className="sub-menu-item">Members</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Communities2" className="sub-menu-item">All Communities</Link></li>
                    </ul>
                </div>
            </div>
        </header>





    )

}
