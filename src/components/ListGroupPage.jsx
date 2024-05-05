import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import ListGroup from './UI/ListGroup'
import Task from './UI/Task'

const ListGroupPage = () => {
	const { items } = useSelector(state => state.list)
	const param = useParams()

	const [newList, setNewList] = useState(
		items.filter(i => i.group === param.group)
	)
	useEffect(() => {
		setNewList(items.filter(i => i.group === param.group))
	}, [param.group, items])
	return (
		<>
			<ListGroup page={true}>
				{newList.map(item => (
					<Task {...item} key={item.id} />
				))}
			</ListGroup>
		</>
	)
}

export default ListGroupPage
