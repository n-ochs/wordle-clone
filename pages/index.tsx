import Gameboard from '@components/gameboard.component';
import Keyboard from '@components/game_keyboard.component';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className='h-screen w-screen flex flex-col space-y-4 items-center justify-center'>
			<Gameboard />
			<Keyboard />
		</div>
	);
};

export default Home;
