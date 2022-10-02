import "./styles/Layout.css"

import logo from "./assets/logo.png"

import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from "./components/ShoppingList"
import Footer from "./components/Footer"

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt="La maison jungle" className="lmj-logo" />

				<h1 className="lmj-title">La maison jungle</h1>
			</Banner>

			<div className="lmj-layout-inner">
				<Cart />
				<ShoppingList />
			</div>

			<Footer />
		</div>
	)
}

export default App