import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="presentation">
        <h2>À propos de moi</h2>
        <p>Bienvenue sur mon site ! Voici une petite présentation de qui je suis et de ce que je fais.</p>
      </div>
      <div className="contact-form">
        <h2>Contactez-moi</h2>
        <form>
          <label>
            Nom:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;