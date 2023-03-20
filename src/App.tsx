import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ShowPage from "./pages/ShowPage";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowPage />} />
      {/* <Route path="/dash" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
      </Route> */}
      <Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="dashboard" element={<Main />} />
      {/* <Route path="register" element={<Register />} /> */}
    </Routes>
  );
}

export default App;
