import React from 'react'
import Task from './Task'

const ListGroup = ({ body, color, children, page }) => {
	return (
		<div
<<<<<<< HEAD
			className={`p-8 bg-gray-200 rounded-[28px]  flex
		flex-col overflow-auto ${page ? 'min-h-[70dvh]' : ''}`}
=======
			className='p-8 bg-gray-200 rounded-[28px]  flex
		flex-col overflow-auto'
>>>>>>> origin/main
		>
			{!page && <Task title={true} body={body} color={color} />}
			{children}
		</div>
	)
}

export default ListGroup
