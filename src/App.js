import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/404Page/PageNotFound";
import AddProduct from "./Pages/AddProduct/AddProduct";

import HomePAge from "./Pages/HomePage/HomePAge";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import HomeRoutes from "./Routes/HomeRoutes";
import ProductRoutes from "./Routes/ProductRoutes";


function App() {
  return (
    <div className="bg-primary-background min-h-screen mx-auto max-w-7xl pb-20 relative">
      <Routes>
        <Route path="/" element={<HomeRoutes />} >
          <Route index element={<HomePAge />} />
        </Route>
        <Route path="/product" element={<ProductRoutes />} >
          <Route path="new" element={<AddProduct />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>

  );
}

export default App;
