import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './village-page.css'

const baseUrl = 'http://localhost:5000/api'
const villageTabs = [
	{
		name: 'Villages'
	},
	{
		name: 'Populations'
	}
]

function VillagePage() {
	const [persons, setPersons] = useState([])
	const [tabIndex, setTabIndex] = useState(0)
	useEffect(() => {
		axios.get(`${baseUrl}/persons`)
			.then(response => {
				setPersons(response.data.data.reverse())
			})
	}, [])
	return (
		<div className='village-page'>
			<div className='tab-container'>
				{
					villageTabs.map((tab, index) => {
						return <div
							className={`tab ${tabIndex === index ? 'active' : ''}`}
							key={tab.name}
							onClick={()=> setTabIndex(index)}
						>
							{tab.name}
						</div>
					})
				}
			</div>
			<div className='village-container'>
				{ 
					tabIndex === 1 ?
						<>
							{
								persons.map(person => {
									return <div className='info-container' key={person.id}>
										<h3 className='title'>{person.firstName} {person.lastName}</h3>
										<div className="info">
											<p><strong>Age: </strong>{person.age}</p>
											<p><strong>Address: </strong>{person.address}</p>
											<p><strong>Phone: </strong>{person.phone}</p>
											<p><strong>Birth Date: </strong>{person.birthday}</p>
											<p><strong>NID: </strong>{person.nid}</p>
										</div>
									</div>
								})
							}
						</> : null
				}
			</div>
		</div>
	)
}

export default VillagePage
