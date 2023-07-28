import { Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./components/menu/Menu";

import TodoExcercise from "./pages/TodoExcercise";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UpdateUserInfo from "./pages/UpdateUserInfo";
import Submit from "./pages/Submit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Menu />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todo" element={<TodoExcercise />} />
          <Route exact path="/profile" element={<MyPage />} />
          <Route exact path="/update" element={<UpdateUserInfo />} />
          <Route exact path="/submit" element={<Submit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
