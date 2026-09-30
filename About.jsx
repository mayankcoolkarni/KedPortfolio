function About() {
  return (
    <>
      <style>{`
        .about {
          min-height: calc(100vh - 70px);
          padding: 90px 8%;
          background: white;
        }

        .about-container {
          max-width: 900px;
          margin: auto;
        }

        .about h1 {
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 30px;
        }

        .about h1 span {
          color: #0284c7;
        }

        .about-box {
          padding: 30px;
          background: #f8fafc;
          border-left: 5px solid #0284c7;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.06);
        }

        .about-box p {
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 20px;
        }

        .education {
          margin-top: 35px;
        }

        .education h2 {
          color: #0f172a;
          margin-bottom: 15px;
        }

        .education-card {
          background: #e0f2fe;
          padding: 20px;
          border-radius: 8px;
        }

        .education-card h3 {
          color: #0284c7;
          margin-bottom: 8px;
        }
      `}</style>

      <section className="about">

        <div className="about-container">

          <h1>
            About <span>Me</span>
          </h1>

          <div className="about-box">

            <p>
              Hello! I am Kedar Kulkarni, a BCA student interested
              in web development and software development.
            </p>

            <p>
              I enjoy learning new technologies and building
              practical projects using programming and web
              development technologies.
            </p>

          </div>

          <div className="education">

            <h2>Education</h2>

            <div className="education-card">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>
                Currently pursuing BCA.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;