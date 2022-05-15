import React from 'react';
import { useWordBoardContext } from 'utils/context/word_board.context';
import GameTile from './gametile.component';

const GameBoard: React.FC = () => {
	const { wordBoard } = useWordBoardContext();

	return (
		<div className='grid gap-2 grid-cols-5 grid-rows-6 bg-black p-2'>
			{wordBoard.map((row) => {
				return row.map((letter, i) => <GameTile key={i} letter={letter} />);
			})}
		</div>
	);
};

export default GameBoard;
