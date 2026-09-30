function Contact() {
  return (
    <>
      <style>{`
        .contact {
          min-height: calc(100vh - 70px);
          padding: 90px 8%;
          background: #e0f2fe;
          display: flex;
          align-items: center;
        }

        .contact-container {
          max-width: 900px;
          width: 100%;
          margin: auto;
        }

        .contact h1 {
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .contact-subtitle {
          font-size: 18px;
          color: #475569;
          margin-bottom: 40px;
        }

        .contact-box {
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .contact-item {
          margin-bottom: 25px;
        }

        .contact-item h3 {
          color: #0284c7;
          margin-bottom: 7px;
        }

        .contact-item p {
          color: #475569;
          font-size: 17px;
        }

        .contact-links {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .contact-link {
          padding: 12px 25px;
          background: #0f172a;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          transition: 0.3s;
        }

        .contact-link:hover {
          background: #0284c7;
        }

        @media (max-width: 600px) {
          .contact {
            padding: 60px 5%;
          }

          .contact h1 {
            font-size: 34px;
          }

          .contact-links {
            flex-direction: column;
          }

          .contact-link {
            width: fit-content;
          }
        }
      `}</style>

      <section className="contact">

        <div className="contact-container">

          <h1>Contact Me</h1>

          <p className="contact-subtitle">
            Feel free to contact me for projects, internships,
            collaborations or opportunities.
          </p>

          <div className="contact-box">

            <div className="contact-item">
              <h3>Email</h3>
              <p>your-email@gmail.com</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Maharashtra, India</p>
            </div>

            <div className="contact-links">

              <a
                href="#"
                className="contact-link"
              >
                GitHub
              </a>

              <a
                href="#"
                className="contact-link"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;