import React from 'react'
// import PropTypes from 'prop-types'
import './create-person-page.css'

const CreatePersonPage = props => {
	return (
		<div className="create-person-page">
			<form className="create-person-form">
				<div className="form-heading">
					<h3>Give correct info</h3>
				</div>
				<div className="form-group">
					<label htmlFor="name"> First Name</label>
					<input placeholder='Your first name here' type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Last Name</label>
					<input placeholder='Your last name here' type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Age</label>
					<input placeholder='Your age here' type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Address</label>
					<input placeholder='Your Address' type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Phone Number</label>
					<input placeholder="Your phone" type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">NID</label>
					<input placeholder="NID" type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Birth of date</label>
					<input placeholder="Your birth of date" type="date"/>
				</div>
				<div className="form-group" id="buttons">
					<button className='submit' type="submit">Submit</button>
					<button className='reset' type='reset'>Reset</button>
				</div>
			</form>
		</div>
	)
}

CreatePersonPage.propTypes = {

}

export default CreatePersonPage
