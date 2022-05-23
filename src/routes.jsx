import { BrowserRouter, Route, Routes } from "react-router-dom";

import OrderPage from "./pages/OrderPage";
import CheckoutPage from "./pages/CheckoutPage";

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OrderPage />} path="/" exact />
        <Route element={<CheckoutPage />} path="/checkout" />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
