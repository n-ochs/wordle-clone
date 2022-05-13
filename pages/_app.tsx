import '../styles/globals.css';
import type { AppProps } from 'next/app';
import InputWordProvider from 'utils/context/word_input.context';

const App: (props: AppProps) => JSX.Element = ({ Component, pageProps }) => {
	return (
		<>
			<InputWordProvider>
				<Component {...pageProps} />
			</InputWordProvider>
		</>
	);
};

export default App;
