import React from "react";
import Footer from "./Footer";
import resume from "./assets/June_Suparoek_Resume_25.pdf";

const Home = () => {
  return (
    <div className="page">
      <section>
        <div className="home">
          <h1>
            Hi, my name is <span className="highlight">June Suparoek</span>. I
            build things for people.
          </h1>
          <p>
            I'm a full-stack software developer who enjoys working at the
            intersection of engineering and design. I'm currently looking for a
            job as a <span className="highlight">software developer</span>
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Resume
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
