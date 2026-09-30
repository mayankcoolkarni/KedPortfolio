function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "C Programming",
    "Java",
    "Python",
    "JDBC",
    "Servlet & JSP",
    "PostgreSQL"
  ];

  return (
    <>
      <style>{`
        .skills {
          min-height: calc(100vh - 70px);
          padding: 90px 8%;
          background: #f1f5f9;
        }

        .skills-container {
          max-width: 1000px;
          margin: auto;
          width: 100%;
        }

        .skills h1 {
          text-align: center;
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .skills-subtitle {
          text-align: center;
          color: #64748b;
          font-size: 18px;
          margin-bottom: 45px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .skill-card {
          background: white;
          padding: 25px 15px;
          text-align: center;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-weight: bold;
          color: #0284c7;
          box-shadow: 0 5px 15px rgba(0,0,0,0.06);
          transition: 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills h1 {
            font-size: 34px;
          }
        }
      `}</style>

      <section className="skills">

        <div className="skills-container">

          <h1>My Skills</h1>

          <p className="skills-subtitle">
            Technologies and tools I am learning and working with
          </p>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Skills;