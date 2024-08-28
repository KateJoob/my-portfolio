import React from 'react';
import "../Auth/styles.css"
export default function ContactUs() {

  return (

    <div className="form-container">

      <h1 className="form-title">Contact Us</h1>

      <img src="/img/8.jpg" alt="Description 1" class="flexbox-image"/>


      <div className="about-me">

        <p>

            Hello! My name is Kate. If you have any questions or just want to connect, feel free to reach out. I would love to hear from you! 

        </p>

      </div>

      <hr />

      <form action="submit-form.php" method="post">

        <input type="text" className="form-input" name="name" placeholder="Your Name" required />

        <input type="email" className="form-input"name="email" placeholder="Your Email" required />

        <textarea name="message" className="form-input" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="form-button">Submit</button>

      </form>

    </div>

  );

}
