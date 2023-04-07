import React from 'react';
import style from './FooterStyles.module.css'


function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {/* <div className="col-md-6">
                        <h3>Contact Me</h3>
                        <p>Feel free to reach out to me for any inquiries or collaborations.</p>
                        <p>Email: email@example.com</p>
                        <p>Phone: 555-555-5555</p>
                    </div> */}
                    <div className="col-lg-12 col-md-6">
                        <h3>Connect with Me</h3>
                        <p>Follow me on social media for updates and more:</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <i className="bi bi-github"></i>
                                <a href="https://github.com/vyncent-t">
                                    GitHub
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <i className="bi bi-linkedin"></i>
                                <a href="https://www.linkedin.com/in/vincent-taylor-jr/">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
