import React from 'react'
import { searchImg } from '../utils'
import IconButton from './UI/IconButton'

const NavBar = () => {
	return (
		<header className='w-full flex items-center mb-8 justify-between'>
			<IconButton className='menu mr-4 min-[400px]:mr-8 w-[24px] h-[24px] flex flex-col justify-center gap-[0.3rem]'>
				<span className='w-[65%] h-[3px] rounded-full bg-white block'></span>
				<span className='w-full h-[3px] rounded-full bg-white block'></span>
				<span className='w-[65%] h-[3px] rounded-full bg-white block'></span>
			</IconButton>
			<h1 className='flex-auto text-3xl font-semibold'>All Task</h1>
			<IconButton className='bg-gray-200 p-2.5 rounded-full'>
				<img src={searchImg} width={16} height={16} alt='search' />
			</IconButton>
		</header>
	)
}

export default NavBar
