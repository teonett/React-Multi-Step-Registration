import React from "react";
import { FormProvider } from "./components/contexts";
import { RouteApp } from "./main/routeApp";

function App() {
  return (
    <FormProvider>
      <RouteApp />
    </FormProvider>
  );
}

export default App;
