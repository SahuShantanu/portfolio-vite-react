import Animated3D from '../components/Animated3D';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <Animated3D />
      <div className="about-content">
        <p>
          Hi! I'm a passionate <b>web developer</b> with a love for building interactive and visually appealing web experiences. I am currently pursuing a <b>BS degree from IIT Madras</b> (IITM), where I am constantly learning and growing in the field of technology.
        </p>
        <p>
          My interests include modern JavaScript frameworks, UI/UX design, and 3D web animation. I enjoy solving problems, collaborating with creative teams, and bringing ideas to life on the web. In my free time, I explore new tech, contribute to open source, and experiment with creative coding.
        </p>
        <p>
          I believe in continuous learning and strive to stay updated with the latest trends in web development. Let's connect and create something amazing together!
        </p>
      </div>
    </section>
  );
}
