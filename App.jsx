import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f8fafc;
          color: #1e293b;
        }

        nav {
          height: 70px;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8%;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 3px 12px rgba(0,0,0,0.2);
        }

        .logo {
          color: #38bdf8;
          font-size: 28px;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #38bdf8;
        }

        @media (max-width: 768px) {
          nav {
            padding: 0 4%;
          }

          .logo {
            font-size: 22px;
          }

          .nav-links {
            gap: 12px;
          }

          .nav-links a {
            font-size: 13px;
          }
        }
      `}</style>

      <BrowserRouter>

        <nav>
          <div className="logo">
            Kedar
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
		
		<footer className="footer">
  <p>© 2026 Kedar Kulkarni. All Rights Reserved.</p>

  <div className="footer-links">
    <Link to="/">Home</Link> {"|"}
    <Link to="/about">About</Link> {"|"}
    <Link to="/projects">Projects</Link> {"|"}
    <Link to="/contact">Contact</Link> {"|"}
  </div> 
</footer>

      </BrowserRouter>
    </>
  );
}

export default App;