import React from 'react'

const Select = ({ ...props }) => {
	return (
		<select {...props}>
			<option className='text-gray-200' value={''} defaultValue>
				select group
			</option>
			{props.array.map(item => (
				<option key={item.body} value={item.body}>
					{item.body}
				</option>
			))}
		</select>
	)
}

export default Select
