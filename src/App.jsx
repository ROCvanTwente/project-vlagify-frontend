import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";


function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<FAQ />} />



      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App