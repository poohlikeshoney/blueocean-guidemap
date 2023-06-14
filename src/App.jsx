import "./App.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail.jsx";
import { About } from "./component/About.jsx";
import { Event } from "./component/Event.jsx";
import { Appbar } from "./layout/Appbar.jsx";
import { Index } from "./routes/Index.jsx";
import { MainBeanner } from "./component/MainBeanner.jsx";
import Cart from "./routes/Cart.jsx";
import { createContext, useEffect, useState } from "react";
import data from "./data.js";

export let Context1 = createContext();

function App() {
  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Appbar></Appbar>
      <MainBeanner></MainBeanner>
      <Routes>
        <Route
          path="/"
          element={<Index shoes={shoes} setShoes={setShoes}></Index>}
        />
        <Route
          path="/detail/:shoesId"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        {/* 404 Page Nou Found*/}
        <Route path="*" element={<div>Page Not Found :/</div>} />
      </Routes>
    </div>
  );
}

export default App;
