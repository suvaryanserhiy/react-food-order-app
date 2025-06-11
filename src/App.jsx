import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContexProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
	return (
		<CartContexProvider>
			<UserProgressContextProvider>
				<Header />
				<Meals />
				<Cart />
				<Checkout />
			</UserProgressContextProvider>
		</CartContexProvider>
	);
}

export default App;
