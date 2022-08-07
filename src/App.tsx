import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import "./App.css";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <main id="home">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
