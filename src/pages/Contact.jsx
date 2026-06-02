import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Need help choosing a place?</h1>
        <p>
          This page is designed like a real project contact page for feedback, student submissions,
          or future travel guide improvements.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="Tell us what kind of Daejeon recommendation you want." rows="5" />
          </label>
          <button type="button">Send message</button>
        </form>

        <div className="contact-card">
          <p><MapPin /> Daejeon, South Korea</p>
          <p><Mail /> hello@daejeondiscovery.kr</p>
          <p><MessageCircle /> Open to student feedback and travel ideas</p>
        </div>
      </section>
    </main>
  );
}
