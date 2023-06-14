import { ConnectWallet } from '@thirdweb-dev/react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const imgPath = "assets/imgs/";
    return (
        <header id="topnav" className="defaultscroll sticky bg-white">
            <div className="container">
                <div>
                    <a className="logo" href="index.html">
                        <img src={imgPath + 'logo.png'}  height={52} alt="" />
                    </a>
                </div>
                {/* <div className="buy-button">
                <Link to="/Join" className="btn btn-primary">Join a Community</Link>
                </div> */}
                <div className="buy-button">
                <ConnectWallet/>
                </div>
              
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* Mobile menu toggle*/}
                        <a className="navbar-toggle" id="isToggle">
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </div>
                </div>
                <div id="navigation" style={{display: "block"}}>

    
                 

                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                        <Link to="/" className="sub-menu-item">Home</Link>
                        </li>
                        <li className="has-submenu parent-menu-item">
                            <a href="">My Community</a><span className="menu-arrow" />
                            <ul className="submenu">
                                <li><Link to="/ProposalTemplate" className="sub-menu-item">Proposal Details Page</Link></li>
                                <li><Link to="/Members" className="sub-menu-item">Members</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Communities2" className="sub-menu-item">All Communities</Link></li>
                        <li><Link to="/Join" className="sub-menu-item">Join a Community </Link></li>

                    </ul>
                </div>
            </div>
        </header>





    )

}
