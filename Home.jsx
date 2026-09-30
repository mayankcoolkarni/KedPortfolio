import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <style>{`
        .home {
          min-height: calc(100vh - 70px);
          padding: 80px 8%;
          display: flex;
          align-items: center;
          background: linear-gradient(
            135deg,
            #e0f2fe,
            #f8fafc
          );
        }

        .home-content {
          max-width: 800px;
        }

        .home h3 {
          font-size: 22px;
          color: #0284c7;
          margin-bottom: 15px;
        }

        .home h1 {
          font-size: 55px;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .home h2 {
          font-size: 30px;
          color: #0284c7;
          margin-bottom: 20px;
        }

        .home p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
          color: #475569;
        }

        .home-buttons {
          display: flex;
          gap: 15px;
        }

        .home-btn {
          padding: 13px 25px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .primary-btn {
          background: #0284c7;
          color: white;
        }

        .primary-btn:hover {
          background: #0369a1;
        }

        .secondary-btn {
          border: 2px solid #0284c7;
          color: #0284c7;
        }

        .secondary-btn:hover {
          background: #0284c7;
          color: white;
        }

        @media (max-width: 768px) {
          .home {
            padding: 60px 5%;
          }

          .home h1 {
            font-size: 38px;
          }

          .home h2 {
            font-size: 24px;
          }

          .home-buttons {
            flex-direction: column;
            width: fit-content;
          }
        }
      `}</style>

      <section className="home">

        <div className="home-content">

          <h3>Hello, I'm</h3>

          <h1>Kedar Kulkarni</h1>

          <h2>BCA Student & Web Developer</h2>

          <p>
            I am a BCA student passionate about web development,
            programming and creating useful software applications.
          </p>

          <div className="home-buttons">

            <Link
              to="/projects"
              className="home-btn primary-btn"
            >
              View My Projects
            </Link>

            <Link
              to="/contact"
              className="home-btn secondary-btn"
            >
              Contact Me
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;