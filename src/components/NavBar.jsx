import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import { searchImg } from '../utils'
import MenuButton from './MenuButton'
import Title from './Title'
import IconButton from './UI/IconButton'

const NavBar = () => {
	return (
		<header className='w-full flex items-center mb-8 justify-between'>
			<MenuButton />
			<Switch>
				<Route path={'/posts/:text'} exact>
					<Title />
				</Route>
				<Route path={'/'} exact>
					<Title text={'All Task'} />
				</Route>
				<Route path={'/posts'} exact>
					<Title text={'All Task'} />
				</Route>
			</Switch>
			<IconButton className='bg-gray-200 p-2.5 rounded-full'>
				<img src={searchImg} width={16} height={16} alt='search' />
			</IconButton>
		</header>
	)
}

export default NavBar
