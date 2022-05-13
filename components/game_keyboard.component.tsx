import React from 'react';
import { keyboardLayout } from 'utils/constants/keyboard_layout.constant';
import { useInputWordContext } from 'utils/context/word_input.context';

const GameKeyboard: React.FC = () => {
	const { inputWord, setInputWord } = useInputWordContext();

	const handleInput: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		let inputLetter: HTMLButtonElement = e.target as HTMLButtonElement;

		setInputWord((prevState) => {
			return (prevState += inputLetter.value);
		});
	};

	return (
		<div className='space-y-3'>
			<div>{inputWord}</div>
			<div className='grid gap-1 grid-cols-10'>
				{keyboardLayout.firstRow.map((ltr, i) => {
					return (
						<button
							key={i}
							value={ltr}
							className='flex items-center justify-center w-6 h-6 border-solid p-4 border-gray-400 border-1 rounded'
							onClick={(e) => handleInput(e)}
						>
							{ltr.toUpperCase()}
						</button>
					);
				})}
			</div>
			<div className='grid gap-1 grid-cols-9'>
				{keyboardLayout.secondRow.map((ltr, i) => {
					return (
						<div key={i} className='flex items-center justify-center w-6 h-6 border-solid p-4 border-gray-400 border-1 rounded'>
							{ltr.toUpperCase()}
						</div>
					);
				})}
			</div>
			<div className='grid gap-1 grid-cols-9'>
				{keyboardLayout.thirdRow.map((ltr, i) => {
					return (
						<div key={i} className='flex items-center justify-center w-6 h-6 border-solid p-4 border-gray-400 border-1 rounded'>
							{ltr.toUpperCase()}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GameKeyboard;
