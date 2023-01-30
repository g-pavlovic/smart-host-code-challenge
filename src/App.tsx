import React, { Suspense } from "react";

import Home from "./pages/Home";

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="app-container">
        <Home />
      </div>
    </Suspense>
  );
};

export default App;
