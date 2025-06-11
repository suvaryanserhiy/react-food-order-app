import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';

export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	function handleCloseModal() {
		userProgressCtx.hideCheckout();
	}
	return (
		<Modal
			open={userProgressCtx.progress === 'checkout'}
			onClose={
				userProgressCtx.progress === 'checkout' ? handleCloseModal : null
			}
		>
			<form>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
				<Input label='Full Name' type='text' id='full-name' />
				<Input label='E-Mail Address' type='email' id='email' />
				<Input label='Street' type='text' id='estreet' />
				<div className='control-row'>
					<Input label='Postal Code' type='text' id='posal-code' />
					<Input label='City' type='text' id='city' />
				</div>
				<p className='modal-actions'>
					<Button type='button' textOnly onClick={handleCloseModal}>
						Close
					</Button>
					<Button>Submit Order</Button>
				</p>
			</form>
		</Modal>
	);
}
