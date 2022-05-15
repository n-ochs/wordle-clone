import React, { createContext, useContext, useState } from 'react';
import { WordBoard, WordBoardType } from 'utils/constants/word_board.constant';

interface WordBoardContextType {
	wordBoard?: WordBoardType;
	setWordBoard?: React.Dispatch<React.SetStateAction<WordBoardType>>;
}

const WordBoardContext: React.Context<WordBoardContextType> = createContext<WordBoardContextType>(null);

const useWordBoardContext: () => WordBoardContextType = () => {
	return useContext(WordBoardContext);
};

const WordBoardProvider: React.FC = ({ children }) => {
	const [wordBoard, setWordBoard] = useState<WordBoardType>(WordBoard);

	return <WordBoardContext.Provider value={{ wordBoard, setWordBoard }}>{children}</WordBoardContext.Provider>;
};

export { useWordBoardContext };
export default WordBoardProvider;
