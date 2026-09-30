function Projects() {
  const projects = [
    {
      title: "Online Attendance System",
      description:
        "A web-based system for managing student attendance digitally.",
      technology: "HTML, CSS, JavaScript, React"
    },
    {
      title: "Online Leave Application",
      description:
        "A system for submitting and managing student leave applications.",
      technology: "Java, JSP, Servlet, PostgreSQL"
    },
    {
      title: "College Complaint Management",
      description:
        "A system where students can submit complaints and check their status.",
      technology: "Java, JSP, Servlet, PostgreSQL"
    }
  ];

  return (
    <>
      <style>{`
        .projects {
          min-height: calc(100vh - 70px);
          padding: 90px 8%;
          background: white;
        }

        .projects-container {
          max-width: 1100px;
          margin: auto;
        }

        .projects h1 {
          text-align: center;
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 45px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .project-card {
          padding: 30px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.07);
          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .project-number {
          font-size: 14px;
          color: #0284c7;
          font-weight: bold;
        }

        .project-card h2 {
          color: #0f172a;
          margin: 12px 0 15px;
          font-size: 22px;
        }

        .project-card p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .technology {
          color: #0284c7;
          font-size: 14px;
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="projects">

        <div className="projects-container">

          <h1>My Projects</h1>

          <div className="project-grid">

            {projects.map((project, index) => (
              <div
                className="project-card"
                key={index}
              >

                <span className="project-number">
                  PROJECT 0{index + 1}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="technology">
                  Technology: {project.technology}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Projects;