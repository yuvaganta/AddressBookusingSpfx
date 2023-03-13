import { HashRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import SetUp from "./SetUp";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="*" element={<SetUp />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
