import React, { useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'
import './create-person-page.css'

const baseUrl = 'http://localhost:5000/api'

const CreatePersonPage = props => {
	const [personState, setPersonState] = useState({
		firstName: '',
		lastName: '',
		age: '',
		address: '',
		phone: '',
		nid: '',
		birthday:  ''
	})
	const chandeHandler = (e) => {
		setPersonState({...personState, [e.target.id]: e.target.value })
	}
	const submitHandler = async (e) => {
		e.preventDefault()
		const newPerson = {
			...personState,
			age: parseInt(personState.age),
			nid: parseInt(personState.nid)
		}
		console.log(newPerson)
		const response = await axios.post(`${baseUrl}/persons`, newPerson)
		if (response.data.success) {
			setPersonState({
				firstName: '',
				lastName: '',
				age: '',
				address: '',
				phone: '',
				nid: '',
				birthday:  ''
			})
			alert("Person created Successfully.")
		} else {
			alert("Something went wrong.")
		}
		
	}
	return (
		<div className="create-person-page">
			<form className="create-person-form" onSubmit={submitHandler}>
				<div className="form-heading">
					<h3>Give correct info</h3>
				</div>
				<div className="form-group">
					<label htmlFor="name"> First Name</label>
					<input
						value={personState.firstName}
						placeholder='Your first name here'
						type="text"
						id="firstName"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Last Name</label>
					<input
						value={personState.lastName}
						placeholder='Your last name here'
						type="text"
						id="lastName"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Age</label>
					<input
						value={personState.age}
						placeholder='Your age here'
						type="text"
						id="age"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Address</label>
					<input
						value={personState.address}
						placeholder='Your Address'
						type="text"
						id="address"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Phone Number</label>
					<input
						value={personState.phone}
						placeholder="Your phone"
						type="text"
						id="phone"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">NID</label>
					<input
						value={personState.nid}
						placeholder="NID"
						type="text"
						id="nid"
						required
						onChange={chandeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Birth of date</label>
					<input
						value={personState.birthday}
						placeholder="Your birth of date"
						type="date"
						id="birthday"
						required
						onChange={chandeHandler}
					/>
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
