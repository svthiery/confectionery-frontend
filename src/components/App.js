import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import ShopContainer from "./ShopContainer";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="app">
    <Header/>
    <Login/>
    <Signup/>
    <ShopContainer/>
    <Cart/>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </div>
  );
}

export default App;
