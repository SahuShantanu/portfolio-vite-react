import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-desc">I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>
      <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent! (Demo only)'); }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-socials">
        <a href="mailto:your@email.com" className="contact-link">✉️ Email</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="contact-link">🔗 LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="contact-link">🐙 GitHub</a>
      </div>
    </section>
  );
}
