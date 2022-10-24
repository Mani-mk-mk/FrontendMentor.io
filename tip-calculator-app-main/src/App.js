import "./App.css";
import Calculator from "./components/Calculator";
import logo from "./images/logo.svg";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<Calculator />
			</div>
		</div>
	);
}

export default App;
