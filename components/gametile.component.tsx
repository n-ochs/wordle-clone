import React from 'react';

interface IProps {
	letter: string;
}

const GameTile: React.FC<IProps> = ({ letter }) => {
	return <div className='border-solid border-gray-400 border-2 rounded flex items-center justify-center text-white w-14 h-14'>{letter ? letter.toUpperCase() : ' '}</div>;
};

export default GameTile;
