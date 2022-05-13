import React from 'react';
import GameTile from './gametile.component';

const GameBoard: React.FC = () => {
	const wordboard: [string, string, string, string, string][] = [
		['g', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', '']
	];

	return (
		<div className='grid gap-2 grid-cols-5 grid-rows-6 bg-black p-2'>
			{wordboard.map((row) => {
				return row.map((letter, j) => <GameTile key={j} letter={letter} />);
			})}
		</div>
	);
};

export default GameBoard;
