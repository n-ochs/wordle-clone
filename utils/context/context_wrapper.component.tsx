import React from 'react';
import GameStateProvider from './game_state.context';
import WordBoardProvider from './word_board.context';

const ContextWrapper: React.FC<React.ReactNode> = ({ children }) => {
	return (
		<GameStateProvider>
			<WordBoardProvider>{children}</WordBoardProvider>
		</GameStateProvider>
	);
};

export default ContextWrapper;
