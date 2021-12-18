import React from "react";

import AppNavbar from "./components/AppNavbar";
import ShoppingLit from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
// import classes from "./App.module.css";

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<AppNavbar />
				<Container>
					<ItemModal />
					<ShoppingLit />
				</Container>
			</div>
		</Provider>
	);
};

export default App;
