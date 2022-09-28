import React from 'react';
import Footer from './Footer';

const Contact = () => {
    return(
        <div className="page">
            <section>
                <div className="contact">
                <h1 className="coverBold" >Say Hello</h1>
                <p>Whether you have an opportunity you want to discuss or you just want to say hi, my inbox is always open.</p>
                <a href="mailto:juneidea@yahoo.com?subject=Hi there 👋🏼" className="button-link">Email Me</a>
                <a href="https://www.linkedin.com/in/june-suparoek/" className="button-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;