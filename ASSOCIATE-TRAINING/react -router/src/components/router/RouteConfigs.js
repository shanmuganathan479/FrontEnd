import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Mobiles from "../pages/Mobiles";
import Laptops from "../pages/Laptops";
import Accessories from "../pages/Accessories";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Products from "../pages/Products";

const RouteConfigs = () => {
  return (
    <div>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="about" element={<About />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
};

export default RouteConfigs;
