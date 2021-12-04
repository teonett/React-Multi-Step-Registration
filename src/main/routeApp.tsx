import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormStage1 from "../components/pages/FormStage1";
import FormStage2 from "../components/pages/FormStage2";
import FormStage3 from "../components/pages/FormStage3";

export const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStage1 />} />
        <Route path="/step2" element={<FormStage2 />} />
        <Route path="/step3" element={<FormStage3 />} />
      </Routes>
    </BrowserRouter>
  );
};
