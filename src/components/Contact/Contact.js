import React from "react";


const Contact = () => {

    return (
        <div>
            <div className="contanct-me section" id="contact-me">
                <h2 className="title" id="contact-title">Get in touch.</h2>
                <div className="content" id="contact-me-content">
                    <p className="section-text" id="contact-me-text">Have a question or want to work together?<br />
                        My inbox is always open!
                    </p>
                    <a href="mailto:nutsa1999@gmail.com" className="button">Email me</a>
                </div>

            </div>

            <footer>

                <div id="social-media">
                    <a href="https://www.linkedin.com/in/nino-kharazishvili-368a441b0/" target="_blank" rel="noreferrer"><i
                        className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/nuccaa99" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"
                        target="_blank"></i></a>
                    <a href="https://codepen.io/nuccaa99/pens/public" target="_blank" rel="noreferrer"><i
                        className="fa-brands fa-codepen"></i></a>
                    <a href="https://www.instagram.com/nuccaa/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <p><small>Designed and Built by Nutsa Kharazishvili.</small></p>
                </div>
            </footer>
        </div>
    )

}

export default Contact; 