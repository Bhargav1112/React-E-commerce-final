import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} exact>
                    <Redirect to={"/home"} />
                </Route>
                <Route path={"/home"}>
                    <Home />
                </Route>
                <Route path={"/products"} exact>
                    <Shop />
                </Route>
                <Route path={"/products/:productId"}>
                    <ProductDetail />
                </Route>
                <Route path={"/cart"}>
                    <ShoppingCart />
                </Route>
                <Route path={"*"}>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
