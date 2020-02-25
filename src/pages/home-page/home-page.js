import React from 'react'
// import PropTypes from 'prop-types'
import './home-page.css'
const bgImage = './home-page.jpeg'

const HomePage = props => {
	return (
		<div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
			<div className="home-page-heading">
				<h3>Smart Village Management System</h3>
				<p>Collect villagers data from home</p>
			</div>
		</div>
	)
}

HomePage.propTypes = {

}

export default HomePage
