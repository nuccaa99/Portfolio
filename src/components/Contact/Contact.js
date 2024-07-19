import React from 'react';

const Contact = () => {
  return (
    <div className="contact_container" id="contact-me">
      <div className="contact_me section">
        <h2 className="title contact">Get in touch.</h2>
        <div className="contact_me_wrapper">
          <p className="contact_me_section_text">
            Have a question or want to work together?
            <br />
            My inbox is always open!
          </p>

          <a href="mailto:nutsa1999@gmail.com">
            <button className="button">Email me</button>
          </a>
        </div>
      </div>

      <footer>
        <section className="social_media footer">
          <a
            href="https://www.linkedin.com/in/nino_kharazishvili_368a441b0/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nuccaa99"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" target="_blank"></i>
          </a>
          <a
            href="https://codepen.io/nuccaa99/pens/public"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-codepen"></i>
          </a>
          <a
            href="https://www.instagram.com/nuccaa/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </section>
        <p>
          <small>Designed and Built by Nutsa Kharazishvili.</small>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
