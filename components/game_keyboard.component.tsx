import React from 'react';
import { KeyboardLayout } from 'utils/constants/keyboard_layout.constant';
import { WordBoardType } from 'utils/constants/word_board.constant';
import { useGameStateContext } from 'utils/context/game_state.context';
import { useWordBoardContext } from 'utils/context/word_board.context';

const GameKeyboard: React.FC = () => {
	const { gameState } = useGameStateContext();
	const { wordBoard, setWordBoard } = useWordBoardContext();

	// re-factor with useReducer
	const handleInput: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		let inputLetter: HTMLButtonElement = e.target as HTMLButtonElement;

		if (gameState && gameState.step === 'start' && inputLetter.value !== 'en') {
			// get length of word in order to determine position for splicing
			const wordLength: number = wordBoard[0].join('').length;

			if (wordLength < 5) {
				const updatedWordBoard: WordBoardType = wordBoard.map((word, i) => {
					if (i === 0) {
						word.splice(wordLength, 1, inputLetter.value);
						return word;
					} else return word;
				});
				setWordBoard(updatedWordBoard);
			}
		}

		if (gameState && gameState.step === 'start' && inputLetter.value === 'en') {
			// write a function that checks if guessed word matches the wordle answer, returns an object including isCorrect: boolean; letter positions etc
			return;
		}
	};

	return (
		<div className='space-y-3'>
			<div className='grid gap-1 grid-cols-10'>
				{KeyboardLayout.firstRow.map((ltr, i) => {
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
				{KeyboardLayout.secondRow.map((ltr, i) => {
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
				{KeyboardLayout.thirdRow.map((ltr, i) => {
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
		</div>
	);
};

export default GameKeyboard;
