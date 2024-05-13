import gsap from 'gsap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../store/menuReducer'

<<<<<<< HEAD
const MenuButton = ({ show, style, className }) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.menu.isOpen)

	const openFun = () => {
		dispatch(setMenu(!isOpen))
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
		} else {
			gsap
				.timeline({
					defaults: {
						ease: 'back.out(1)',
					},
				})
				.to('#line-1, #line-3', {
					width: '100%',
					duration: 0.3,
					stagger: 0.1,
				})
				.to(
					'#line-1, #line-3',
					{
						y: 0,
						duration: 0.3,
					},
					'-=0.2'
				)
				.to(
					'#line-2',
					{
						opacity: 0,
						duration: 0,
					},
					'-=0.1'
				)
				.to(
					'#line-1',
					{
						rotate: '45deg',
						duration: 0.2,
					},
					'-=0.1'
				)
				.to(
					' #line-3',
					{
						rotate: '-45deg',
						duration: 0.2,
					},
					'<'
				)

			gsap.timeline().to('#item-menu', {
				x: 0,
				duration: 0.5,
				ease: 'back.out(1)',
				stagger: 0.05,
				delay: 0.1,
			})
		}
	}

=======
const MenuButton = ({ show, style }) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.menu.isOpen)
>>>>>>> origin/main
	return (
		<button
			className={`${
				!show && 'menu-position'
			} mr-4 min-[400px]:mr-8 w-[24px] h-[24px] 
<<<<<<< HEAD
			flex flex-col  justify-center cursor-pointer z-10 ${className}`}
			style={style}
			onClick={openFun}
=======
			flex flex-col relative justify-center cursor-pointer z-10 `}
			style={style}
			onClick={() => {
				dispatch(setMenu(!isOpen))
				if (isOpen) {
					gsap
						.timeline()
						.to(' #line-3, #line-1', {
							rotate: '0deg',
							duration: 0.2,
							ease: 'back.out(1)',
						})
						.to(
							'#line-2',
							{
								opacity: 1,
								duration: 0,
								ease: 'back.out(1)',
							},
							'-=0.1'
						)
						.to('#line-1', {
							y: '-0.5rem',

							duration: 0.3,
							ease: 'back.out(1)',
						})
						.to(
							'#line-3',
							{
								y: '0.5rem',
								duration: 0.3,
								ease: 'back.out(1)',
							},
							'<'
						)
						.to(
							'#line-1, #line-3',
							{
								width: '65%',
								duration: 0.3,
								ease: 'back.out(1)',
								stagger: 0.1,
							},
							'-=0.2'
						)
				} else {
					gsap
						.timeline()
						.to('#line-1, #line-3', {
							width: '100%',
							duration: 0.3,
							ease: 'back.out(1)',
							stagger: 0.1,
						})
						.to(
							'#line-1, #line-3',
							{
								y: 0,
								duration: 0.3,
								ease: 'back.out(1)',
							},
							'-=0.2'
						)
						.to(
							'#line-2',
							{
								opacity: 0,
								duration: 0,
								ease: 'back.out(1)',
							},
							'-=0.1'
						)
						.to(
							'#line-1',
							{
								rotate: '45deg',
								duration: 0.2,
								ease: 'back.out(1)',
							},
							'-=0.1'
						)
						.to(
							' #line-3',
							{
								rotate: '-45deg',
								duration: 0.2,
								ease: 'back.out(1)',
							},
							'<'
						)
				}
			}}
>>>>>>> origin/main
		>
			{show && (
				<>
					<span
						className='w-[65%] absolute translate-y-[-0.5rem]  h-[3px] rounded-full bg-white block'
						id='line-1'
					></span>
					<span
						className='w-full  absolute h-[3px] rounded-full bg-white block'
						id='line-2'
					></span>
					<span
						className='w-[65%] translate-y-[0.5rem]   absolute  h-[3px] rounded-full bg-white block'
						id='line-3'
					></span>
				</>
			)}
		</button>
	)
}

export default MenuButton
