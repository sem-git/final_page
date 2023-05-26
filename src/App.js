import logo from "./logo.svg";
import "./App.css";
//App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "styled-components";
import Main from "./pages/Main";
import Fail from "./pages/Fail";
import Pass from "./pages/Pass";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/pass" element={<Pass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
