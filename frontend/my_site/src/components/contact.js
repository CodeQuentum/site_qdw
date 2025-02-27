import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactSection = () =>{
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Section Gauche - Présentation */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold text-dark">Votre site web sur mesure</h2>
          <p className="text-muted">
            Nous créons des sites vitrines modernes et performants pour donner 
            à votre entreprise une présence en ligne professionnelle.
          </p>
          <ul className="list-unstyled">
            <li>✅ Sites web optimisés et responsives</li>
            <li>✅ Design épuré et professionnel</li>
            <li>✅ Accompagnement personnalisé</li>
          </ul>
        </div>

        {/* Section Droite - Formulaire de contact */}
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="fw-semibold text-center">Contactez-nous</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Téléphone</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <button className="btn btn-primary w-100">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;