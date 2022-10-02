import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './pages/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/survey/:questionNumber" element={<Survey />} />
				<Route exact path="/freelances" element={<Freelances />} />
				<Route element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);