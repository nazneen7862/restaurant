import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Food is the essence of life, providing the nourishment and energy needed to sustain our bodies and minds. It is not merely a means of survival but a source of joy, culture, and connection. From fresh fruits and vegetables to rich, flavorful dishes, food represents the diversity of human creativity and tradition. It binds communities, tells stories, and brings people together in celebration and comfort. At its core, food is a reflection of care and sustenance, a fundamental necessity that shapes the very fabric of our existence.
            </p>
            <Link to={"/"}>Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    
  );
};

export default About;