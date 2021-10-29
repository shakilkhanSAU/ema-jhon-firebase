import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Shop></Shop>
						</Route>
						<Route exact path="/shop">
							<Shop></Shop>
						</Route>
						<Route exact path="/review">
							<OrderReview></OrderReview>
						</Route>
						<PrivateRoute exact path="/inventory">
							<Inventory></Inventory>
						</PrivateRoute>
						<PrivateRoute exact path="/placeorder">
							<PlaceOrder></PlaceOrder>
						</PrivateRoute>
						<PrivateRoute exact path="/shipping">
							<Shipping></Shipping>
						</PrivateRoute>
						<Route exact path="/login">
							<Login></Login>
						</Route>
						<Route exact path="/register">
							<Register></Register>
						</Route>
						<Route to="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
