import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useButtonAdd } from '../hooks/useButtonAdd'
import { addItem } from '../store/listReducer'
import { changeInput, changeSelect } from '../store/taskCreateReducer'
import AddButton from './UI/AddButton'
import Button from './UI/Button'
import Input from './UI/Input'
import Select from './UI/Select'

const Add = () => {
	const groups = useSelector(state => state.list.groups)
	const { inputValue, selectValue } = useSelector(state => state.taskCreate)
	const [onClickButton, open] = useButtonAdd()
	const dispatch = useDispatch()
	const inputRef = useRef(null)
	return (
		<div
			id='cont'
			className=' bg-gray-200 backdrop-blur-md rounded-[28px] fixed md:bottom-8 md:right-8 w-14 h-14 bottom-5 right-5  max-h-[88%] max-w-[88%] 
			 '
		>
			<div id='cont-add' className={`w-full h-full   bg-transparent `}>
				<form
					className='bg-transparent overflow-hidden p-6'
					action=''
					onSubmit={e => {
						e.preventDefault()
						dispatch(
							addItem({
								id: Date.now(),
								group: selectValue,
								body: inputValue,
								isSucsses: false,
							})
						)

						onClickButton()
						setTimeout(() => {
							dispatch(changeInput(''))
							dispatch(changeSelect(''))
						}, 500)
					}}
				>
					<Input
						ref={inputRef}
						className='input-add'
						id='item-add'
						placeholder='write a text your task...'
						value={inputValue}
						onChange={e => {
							dispatch(changeInput(e.target.value))
						}}
					/>
					<Select
						className='select-add'
						id='item-add'
						array={groups}
						value={selectValue}
						onChange={e => {
							dispatch(changeSelect(e.target.value))
						}}
					/>
					<Button className='button-add' id='item-add'>
						Add
					</Button>
				</form>
			</div>

			<AddButton ref={inputRef} onClickButton={onClickButton} open={open} />
		</div>
	)
}

export default Add
