import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Header = props => {
	return (
		<header className='header'>
			<nav className='nav'>
				<div className="logo">
					<Link to='/'>SVMS</Link>
				</div>
				<div className="nav-items">
					<Link to="/">Home</Link>
					<Link to="/village">Village</Link>
					<Link to="/create-person">Create Person</Link>
					<Link to="/hospital">Hospital</Link>
					<Link to="/institution">Institution</Link>
					<Link to="/transport">Transport</Link>
					
				</div>
			</nav>
		</header>
	)
}

Header.propTypes = {

}

export default Header
