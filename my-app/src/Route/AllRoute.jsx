import React from "react";
import { Route, Routes } from "react-router-dom";

import { BelowNavBar } from "../Components/style";
import Cricket from "../Pages/Cricket";
import Home from "../Pages/Home";
import India from "../Pages/India";
import { Latest } from "../Pages/Latest";
import { LeftSideNewsContainer } from "../Pages/LeftSideNewsContainer";
import LoginPage from "../Pages/LoginPage";
import { RightSideNewsContainer } from "../Pages/RightSideNewsContainer";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <BelowNavBar id="BelowNavbar">
              {" "}
              <LeftSideNewsContainer />
              <Home /> <RightSideNewsContainer />
            </BelowNavBar>
          }
        ></Route>
        <Route path={"/login"} element={<LoginPage />}></Route>

        <Route
          path={"/Latest"}
          element={
            <BelowNavBar id="BelowNavbar">
              <LeftSideNewsContainer />
              <Latest /> <RightSideNewsContainer />
            </BelowNavBar>
          }
        ></Route>
        <Route
          path={"/cricket"}
          element={
            <BelowNavBar id="BelowNavbar">
              <LeftSideNewsContainer />
              <Cricket />
              <RightSideNewsContainer />
            </BelowNavBar>
          }
        ></Route>
         <Route
          path={"/india"}
          element={
            <BelowNavBar id="BelowNavbar">
              <LeftSideNewsContainer />
             <India/>
              <RightSideNewsContainer />
            </BelowNavBar>
          }
        ></Route>













        
      </Routes>
    </div>
  );
};

export default AllRoute;
