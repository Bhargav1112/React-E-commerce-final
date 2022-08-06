import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/home"} />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/products"} element={<Shop />} />
                <Route path={"/products/:productId"} element={<ProductDetail />} />
                <Route path={"/cart"} element={<ShoppingCart />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
