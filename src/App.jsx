import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inloggen" element={<LoginPage />} />

      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App