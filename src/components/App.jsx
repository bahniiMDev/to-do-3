import React from 'react'
import Add from './Add'
import List from './List'
import NavBar from './NavBar'

const App = () => {
	return (
		<div className='p-8 w-full h-full'>
			<NavBar />
			<List />
			<Add />
		</div>
	)
}

export default App
