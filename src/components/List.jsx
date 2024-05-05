import React from 'react'
import { useSelector } from 'react-redux'
import ListGroup from './UI/ListGroup'
import Task from './UI/Task'

const List = () => {
	const items = useSelector(state => state.list.items)
	const groups = useSelector(state => state.list.groups)
	return (
		<main className='flex flex-col gap-4'>
			{items.length > 0 ? (
				groups.map(item => (
					<ListGroup key={item.color} {...item}>
						{items
							.filter(item2 => item2.group === item.body)
							.map(item3 => (
								<Task
									key={item3.id}
									body={item3.body}
									id={item3.id}
									isSucsses={item3.isSucsses}
								/>
							))}
					</ListGroup>
				))
			) : (
				<p>dwadwa</p>
			)}
		</main>
	)
}

export default List
