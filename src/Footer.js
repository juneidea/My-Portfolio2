import React from 'react';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';

const Footer = () => {
    return(
        <div className="footer">
          <div className="social-links">
          <p>&copy; {new Date().getFullYear()} by June Idea</p>
          <div className="social-list">
            <div className="social-item" ><a href="https://github.com/juneidea?tab=repositories"    target="_blank" rel="noopener noreferrer" ><GitHub /></a></div>
            <div className="social-item" ><a href="https://www.linkedin.com/in/june-suparoek/"    target="_blank" rel="noopener noreferrer" ><LinkedIn /></a></div>
          </div>
          </div>
        </div>   
    )
}

export default Footer;