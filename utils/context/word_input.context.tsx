import React, { createContext, useContext, useState } from 'react';

interface InputWordContextType {
	inputWord?: string;
	setInputWord?: React.Dispatch<React.SetStateAction<string>>;
}

const InputWordContext: React.Context<InputWordContextType> = createContext<InputWordContextType>(null);

const useInputWordContext: () => InputWordContextType = () => {
	return useContext(InputWordContext);
};

const InputWordProvider: React.FC = ({ children }) => {
	const [inputWord, setInputWord] = useState<string>('');

	return <InputWordContext.Provider value={{ inputWord, setInputWord }}>{children}</InputWordContext.Provider>;
};

export { useInputWordContext };
export default InputWordProvider;
