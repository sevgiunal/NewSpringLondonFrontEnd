import React from 'react'
import './AboutUs.css';
import constructionpic from '/Users/sevgiunal/Desktop/NewSpringLondonLTD/NewSpringLondonFrontEnd/newspringlondon/src/assets/constructionpic.jpg'

function AboutUs() {
  return (
    <div className="about-wrapper">
    <div className="about">
      <h1 className="about__title">About New Spring London</h1>
      <p className="about__subtitle">
        Building excellence through smart investments, real estate, trade, and construction
        backed by expert consulting and reliable project delivery.
      </p>

      <div className="about__mission-vision">
        <div className="about__mission">
          <h2>Our Mission</h2>
          <p>
            "We create value through smart investments, real estate, trade,
            and construction backed by expert consulting and reliable project delivery."
          </p>
        </div>

        <div className="about__image">
          <img src={constructionpic} alt="Team on construction site" />
        </div>

        <div className="about__vision">
          <h2>Our Vision</h2>
          <p>
            "To be the trusted partner for growth and development in
            property, trade, and construction across global markets."
          </p>
        </div>
      </div>

      <div className="about__values">
        <h2>Our Core Values</h2>
        <p>
          These fundamental principles guide every decision we make and every project we undertake.
        </p>

        <div className="about__values-grid">
          <div className="about__value-card">
            <h3>Integrity</h3>
            <p> We act with transparency and accountability.</p>
          </div>
          <div className="about__value-card">
            <h3>Innovation</h3>
            <p>We find better ways to grow and build.</p>
          </div>
          <div className="about__value-card">
            <h3>Excellence</h3>
            <p>We deliver quality in everything we do.</p>
          </div>
        </div>
        <div className="about__values-grid about__values-grid--bottom">
          <div className="about__value-card">
            <h3>Sustainability</h3>
            <p> We develop projects with long-term impact.</p>
          </div>
          <div className="about__value-card">
            <h3>Colloboration</h3>
            <p>We succeed through strong partnerships. </p>

          </div>
          <div className="about__value-card">
            <h3>Adaptability</h3>
            <p>We stay agile in changing markets.</p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default AboutUs
