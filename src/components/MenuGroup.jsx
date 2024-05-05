import gsap from 'gsap'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { setMenu } from '../store/menuReducer'
import { listImg } from '../utils'
import Add from './Add'
import GroupButton from './UI/GroupButton'
import HR from './UI/HR'

const MenuGroup = () => {
	const { groups, items } = useSelector(state => state.list)
	const { isOpen } = useSelector(state => state.menu)
	const refMenu = useRef('')
	const dispatch = useDispatch()
	const close = () => {
		dispatch(setMenu(false))
		if (isOpen) {
			gsap
				.timeline({
					defaults: {
						ease: 'back.out(1)',
					},
				})
				.to(' #line-3, #line-1', {
					rotate: '0deg',
					duration: 0.2,
				})
				.to(
					'#line-2',
					{
						opacity: 1,
						duration: 0,
					},
					'-=0.1'
				)
				.to('#line-1', {
					y: '-0.5rem',

					duration: 0.3,
				})
				.to(
					'#line-3',
					{
						y: '0.5rem',
						duration: 0.3,
					},
					'<'
				)
				.to(
					'#line-1, #line-3',
					{
						width: '65%',
						duration: 0.3,

						stagger: 0.1,
					},
					'-=0.2'
				)
			gsap.timeline().to('#item-menu', {
				x: '-150%',
				duration: 0.5,
				ease: 'back.out(1)',
				stagger: 0.05,
			})
		}
	}

	return (
		<div
			ref={refMenu}
			style={{
				top: `calc(50% - ${refMenu.current?.offsetHeight / 2}px)`,
			}}
			className={`z-[15] w-[50vw] absolute max-w-[200px] left-5 md:left-8 flex flex-col gap-3`}
		>
			<GroupButton
				id='item-menu'
				className=' bg-[rgba(32,32,32,1)] group-button rounded-[10px] mb-2 translate-x-[-150%]'
			>
				<p className='text-xs  font-semibold  cursor-pointer text-gray-300 w-full h-full '>
					<Link
						to={`/posts`}
						onClick={close}
						className='w-full h-full block p-4'
					>
						All Task
					</Link>
				</p>
			</GroupButton>
			<HR
				id='item-menu'
				className={`translate-x-[-150%] w-[80%] h-[1.5px] rounded-full bg-gray-200 block relative left-[10%]`}
			/>
			<p
				className='flex translate-x-[-150%] items-center relative text-gray-300 text-[14px] left-[10%]'
				id='item-menu'
			>
				<img src={listImg} alt='list' width={14} height={14} className='mr-2' />
				<span className='py-1 '>LIST</span>
			</p>
			<GroupButton
				id='item-menu'
				className='  translate-x-[-150%] bg-[rgba(32,32,32,1)] group-button rounded-[10px] mb-2 py-2'
			>
				{groups.map((item, index) => (
					<div key={index}>
						<Link
							onClick={close}
							to={`/posts/${item.body}`}
							className='text-[12px] py-2.5 px-4  font-medium cursor-pointer text-gray-100 w-full h-full flex items-center'
						>
							<div
								className={`h-[12px] aspect-square mr-4 relative flex-center items-center bg-[${item.color}] rounded-full`}
								style={{
									backgroundColor: item.color,
								}}
							></div>
							{item.body}
							<span className=' flex w-full justify-end'>
								{
									items.filter((item2, index) => item2.group === item.body)
										.length
								}
							</span>
						</Link>
						{index !== groups.length - 1 && (
							<HR
								className={`w-[80%] h-[1.5px] rounded-full bg-gray-200 block relative left-[10%]`}
							/>
						)}
					</div>
				))}
			</GroupButton>
			<Add />
		</div>
	)
}

export default MenuGroup
