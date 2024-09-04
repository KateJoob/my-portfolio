import React from 'react';
import Gallery from '../Gallery';
import Buttons from '../Buttons';

export default () => {
  return (
    <div className="home">
      <Gallery/>
      <Buttons/>
      <header className="header">
        <h1>Innovating with Technology</h1>
      </header>
      <section className="image-section">
        <div className="image-container">
          <img src="/img/9.jpg" alt="" className="image" />
          <p>Tech-Driven Evolution</p>
        </div>
        <div className="image-container">
          <img src="/img/10.jpg" alt="Description 2" className="image" />
          <p>Digital Breakthroughs</p>
        </div>
        <div className="image-container">
          <img src="/img/11.jpg" alt="Description 3" className="image" />
          <p>Future-Forward Solutions</p>
        </div>
      </section>
      <section className="about-me">
        <p>
          Hello! I'm Kate, a passionate developer committed to creating innovative solutions with technology. I love exploring new tech trends, and my goal is to build applications that make life easier and more enjoyable. Welcome to my personal website!
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        <div className="social-media">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}