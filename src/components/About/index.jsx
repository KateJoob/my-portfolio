import React from 'react';
import styles from './About.module.css';  

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.imageSection}>
         <img src="/img/13.jpg" alt="About me" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <article className={styles.article}>
            <p>
            Hello! My name is Kate, and I'm from the beautiful South of Thailand. Currently, I'm diving into the world of web development, a field that I find incredibly exciting and full of opportunities. As I navigate through this learning journey, I'm eager to enhance my skills and build engaging web experiences.
            <br/>
            <br/>
            <br/>
            <br/>
            When I'm not immersed in code, I have a deep passion for cooking and baking. There's something truly special about experimenting with new recipes and perfecting classic dishes. Whether it's whipping up a delightful dessert or preparing a hearty meal, cooking is a way for me to express creativity and share joy with others.
            <br/>
            <br/>
            <br/>
            <br/>
            Thank you for taking the time to learn a bit about me. I look forward to connecting and sharing more as I continue my journey in web development and beyond!
            </p>
          </article>
          <div className={styles.bottomText}>
            Thank you for visiting my page!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;







