import "./App.css";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
}

export default App;
