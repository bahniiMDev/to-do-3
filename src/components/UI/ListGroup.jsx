import React from 'react'
import Task from './Task'

const ListGroup = ({ body, color, children }) => {
	return (
		<div
			className='p-8 bg-gray-200 rounded-[28px] mb-4 flex
		flex-col'
		>
			<Task title={true} body={body} color={color} />
			{children}
		</div>
	)
}

export default ListGroup
