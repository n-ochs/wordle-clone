import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ContextWrapper from 'utils/context/context_wrapper.component';

const App: (props: AppProps) => JSX.Element = ({ Component, pageProps }) => {
	return (
		<ContextWrapper>
			<Component {...pageProps} />
		</ContextWrapper>
	);
};

export default App;
