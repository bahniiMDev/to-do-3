import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

const Title = ({ text }) => {
	const params = useParams()
	return (
		<h1 className='flex-auto text-3xl font-semibold'>
			{text ? text : params.text}
		</h1>
	)
}

export default Title
