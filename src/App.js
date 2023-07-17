import React from 'react';
import data from "./components/Back/Data/Data";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import {BrowserRouter as Router} from "react-router-dom";
const App=()=>{
  const {productItems}=data;
  return(
    <div>
      <Router>
        <Header/>
        <Routes productItems={productItems} />
      </Router>
    

    </div>
  );
};
export default App;