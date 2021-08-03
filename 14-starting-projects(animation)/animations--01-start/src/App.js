import React, { useState } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

import Transition from 'react-transition-group/Transition';

const App = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showBlock, setShowBlock] = useState(false);

	const showModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className='App'>
			<h1>React Animations</h1>
			<button
				className='Button'
				onClick={() => setShowBlock((prevState) => !prevState)}
			>
				Toggle
			</button>

			<Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
				{(state) => (
					<div
						style={{
							backgroundColor: 'red',
							width: 100,
							height: 100,
							margin: 'auto',
							transition: 'opacity 1s ease-out',
							opacity: state === 'exiting' ? 0 : 1,
						}}
					></div>
				)}
			</Transition>

			<br />

			<Modal show={modalIsOpen} closed={closeModal} />

			{modalIsOpen && <Backdrop show={modalIsOpen} />}

			<button className='Button' onClick={showModal}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
};

export default App;
