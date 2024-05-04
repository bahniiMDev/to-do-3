import gsap from 'gsap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSucsses } from '../../store/listReducer'

const Task = ({ body, title = false, id, color, isSucsses }) => {
	const dispatch = useDispatch()
	return (
		<div
			onClick={e => {
				if (e.target.closest('.task-123')) {
					if (!title) {
						dispatch(changeSucsses(id))
					}
				}
			}}
			onMouseDown={e => {
				if (!title) {
					gsap.to(e.target.closest('.task-123'), {
						scale: 1.05,
						opacity: 0.8,
						ease: 'back.out(1)',
						duration: 0.6,
					})
					e.stopPropagation()
				}
			}}
			onMouseUp={e => {
				if (!title) {
					gsap.to(e.target.closest('.task-123'), {
						scale: 1,
						opacity: 1,
						ease: 'back.out(1)',
						duration: 0.6,
					})
					e.stopPropagation()
				}
			}}
			className={`task-123 w-full flex mb-1 items-center origin-left ${
				!title ? 'cursor-pointer' : 'pointer-events-none'
			}`}
			id='task'
		>
			<div className='h-[20px] aspect-square mr-4 relative flex-center'>
				<button
					className={`h-full w-full absolute top-0 left-0 flex-center block  transition-transform ${
						!isSucsses ? 'scale-0' : 'scale-1'
					}`}
					style={{}}
				>
					<svg
						width='17'
						height='12'
						viewBox='0 0 17 12'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							className='icon'
							d='M5.20948 11.5602C5.04155 11.5676 4.87603 11.5183 4.73948 11.4202L0.249483 7.71024C-0.0397957 7.45413 -0.0833516 7.01857 0.149483 6.71024C0.405152 6.4223 0.837337 6.37476 1.14948 6.60024L5.14948 9.86024L15.6495 0.150241C15.96 -0.0828876 16.3971 -0.0404685 16.657 0.248016C16.9169 0.5365 16.9136 0.97565 16.6495 1.26024L5.71948 11.3602C5.58026 11.488 5.39843 11.5593 5.20948 11.5602Z'
							fill='rgba(235, 235, 245, 0.6)'
						/>
					</svg>
				</button>
				<button
					className={`block h-full w-full absolute transition-transform rounded-full
					${isSucsses ? 'scale-0' : 'scale-1'}`}
					style={{
						backgroundColor: color ? color : '',
					}}
					id='circle'
				></button>
			</div>

			<p
				className={
					title
						? 'text-lg font-semibold select-none pointer-events-none'
						: 'text-base text-gray-300 font-light select-none pointer-events-none'
				}
			>
				{body}
			</p>
		</div>
	)
}

export default Task
