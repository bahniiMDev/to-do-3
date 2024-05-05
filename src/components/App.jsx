import React from 'react'
import Blur from './Blur'
import Controls from './Controls'
import Main from './Main'

const App = () => {
	return (
		<div className='app-menu-cont'>
			<Controls />
			<Blur />
			<Main />
		</div>
	)
}

export default App
