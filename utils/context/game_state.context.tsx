import React, { createContext, useContext, useState } from 'react';
import { WordBank } from 'utils/constants/word_bank.constant';
import { randomIntFromInterval } from 'utils/util';

type GameStateType = { step: string; correctAnswer: string };

interface GameStateContextType {
	gameState?: GameStateType;
	setGameState?: React.Dispatch<React.SetStateAction<GameStateType>>;
}

const GameStateContext: React.Context<GameStateContextType> = createContext<GameStateContextType>(null);

const useGameStateContext: () => GameStateContextType = () => {
	return useContext(GameStateContext);
};

const GameStateProvider: React.FC = ({ children }) => {
	const [gameState, setGameState] = useState<GameStateType>({ step: 'start', correctAnswer: WordBank[randomIntFromInterval(1, WordBank.length)] });

	return <GameStateContext.Provider value={{ gameState, setGameState }}>{children}</GameStateContext.Provider>;
};

export { useGameStateContext };
export default GameStateProvider;
