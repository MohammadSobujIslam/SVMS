import React from 'react'
import './institution-page.css'
// import PropTypes from 'prop-types'
const instImage = './institution.jpeg'

const InstutionPage = props => {
	return (
		<div className="institution-page" style={{ backgroundImage: `url(${instImage})` }}>
			<div className="">Instutions data goes here...</div>
		</div>
	)
}

InstutionPage.propTypes = {

}

export default InstutionPage
