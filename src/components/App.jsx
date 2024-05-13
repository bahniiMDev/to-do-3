<<<<<<< HEAD
import React from 'react'
import Blur from './Blur'
import Controls from './Controls'
import Main from './Main'
=======
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Add from './Add'
import List from './List'
import MenuButton from './MenuButton'
import NavBar from './NavBar'
>>>>>>> origin/main

const App = () => {
	const isOpen = useSelector(state => state.menu.isOpen)
	const [size, setSize] = useState(['0', '0'])
	useEffect(() => {
		const el = document.querySelector('.menu-position')
		setSize([el.offsetLeft, el.offsetTop])
	}, [size])
	window.addEventListener('resize', () => {
		const el = document.querySelector('.menu-position')
		const size = [el.offsetLeft, el.offsetTop]
	})

	return (
		<div className='app-menu-cont'>
<<<<<<< HEAD
			<Controls />
			<Blur />
			<Main />
=======
			<MenuButton
				show={true}
				style={{
					position: 'absolute',
					top: `${size[1]}px`,
					left: `${size[0]}px`,
				}}
			/>

			<div
				className={`app md:p-8 p-5 w-full h-full ${
					isOpen ? 'menu-activ-app' : ''
				}`}
			>
				<NavBar />
				<List />
				<Add />
			</div>
>>>>>>> origin/main
		</div>
	)
}

export default App
