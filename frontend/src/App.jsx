import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import DonateCancel from "./pages/DonateCancel";
import DonateSuccess from "./pages/DonateSuccess";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Header */}
        <Header />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate-success" element={<DonateSuccess />} />
            <Route path="/donate-cancel" element={<DonateCancel />} />

            {/* 404 Catch-All */}
            <Route
              path="*"
              element={
                <h1 className="text-center mt-20 text-2xl sm:text-3xl font-bold text-gray-700">
                  Page Not Found
                </h1>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
