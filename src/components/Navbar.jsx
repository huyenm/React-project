import { NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
	const navigate = useNavigate();
	const handleClick = () => navigate("/sign-up");

	return (
		<header>
			<h3>LOGO</h3>
			<nav className="nav-bar">
				<NavLink to="/log-in"> Log In</NavLink>
				<button className="btn" type="button" onClick={handleClick} >Sign Up</button>
			</nav>
		</header>
	);
}

export default Navbar;