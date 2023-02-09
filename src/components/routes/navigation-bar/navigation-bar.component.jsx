import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';

const Navbar = () => {
    return(
    <>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/signIn">
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
    </>);
}



export default Navbar;