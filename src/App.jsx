import { Routes, Route } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { useApp } from "./context/AppContext";
import { authService } from "./services/authService";

function App() {
  const { user } = useApp();
  const { t } = useTranslation();
  const userPreviousRef = useRef(null);

  useEffect(() => {
    // Show success toast when user logs in (user changes from null to having a value)
    if (user && !userPreviousRef.current) {
      toast.success(t('login.loginSuccess'));
    }
    userPreviousRef.current = user;
  }, [user, t]);

  useEffect(() => {
    // Debug: Log JWT token and user info
    const token = authService.getToken();
    console.log('JWT Token:', token);
    console.log('User:', user);
    console.log('User logged in:', !!token && !!user);
  }, [user]);

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