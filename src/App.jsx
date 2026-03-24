import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";


function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App