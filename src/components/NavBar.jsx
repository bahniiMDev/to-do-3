import React from 'react'
import { searchImg } from '../utils'
import MenuButton from './MenuButton'
import IconButton from './UI/IconButton'

const NavBar = () => {
	return (
		<header className='w-full flex items-center mb-8 justify-between'>
			<MenuButton />

			<h1 className='flex-auto text-3xl font-semibold'>All Task</h1>
			<IconButton className='bg-gray-200 p-2.5 rounded-full'>
				<img src={searchImg} width={16} height={16} alt='search' />
			</IconButton>
		</header>
	)
}

export default NavBar
