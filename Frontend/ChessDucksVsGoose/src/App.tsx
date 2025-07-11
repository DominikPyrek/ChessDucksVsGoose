import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PlayChess from "./pages/PlayChess";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<PlayChess />} />
      </Routes>
    </Layout>
  );
}

export default App;
