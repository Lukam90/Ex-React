import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createGlobalStyle } from "styled-components"

import Header from './pages/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import NotFound from './pages/NotFound'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<GlobalStyle />

			<Header />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/survey/:questionNumber" element={<Survey />} />
				<Route exact path="/freelances" element={<Freelances />} />
				<Route element={<NotFound />} />
			</Routes>
		</Router>
	</React.StrictMode>
);