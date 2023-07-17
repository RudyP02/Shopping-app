import React from "react";
import Products from "../Products/Products"
import { Routes, Route } from  "react-router-dom";

const Router = ({productItems}) => {
    return (
    <div>
        <Routes>
          <Route path="/" element={<Products productItems={productItems}/>} >
          </Route>
        </Routes>
    </div>
    );
};
export default Router;