import { Route, Routes } from 'react-router-dom';
import Login from './layouts/login/Login';
import ShowPage from './layouts/ShowPage';
import Main from './layouts/main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowPage />} />
      {/* <Route path="/dash" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
      </Route> */}
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Main />} />
      {/* <Route path="register" element={<Register />} /> */}
    </Routes>
  );
}

export default App;
