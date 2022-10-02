import "./styles/index.css"

import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from "./components/ShoppingList"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<Banner />
			<Cart />
			<ShoppingList />
			<Footer />
		</>
	)
}

export default App