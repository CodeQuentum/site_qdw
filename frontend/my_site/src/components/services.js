import React from "react";
import servicesData from "../data/services.json"; // Vérifie l'emplacement du JSON

const Services = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Mes services</h2>
      <div className="row">
        {servicesData.services.map((service) => (
          <div key={service.id} className="col-md-6 d-flex">
            <div className="card shadow p-4 mb-4 h-100 d-flex flex-column">
              <div className="flex-grow-1">
                <h3 className="fw-bold">{service.nom}</h3>
                <p className="text-muted">{service.description}</p>
                <ul className="list-unstyled">
                  {service.inclus.map((item, index) => (
                    <li key={index}>✅ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="fw-semibold text-primary">{service.prix}€</h5>
                {service.options && service.options.length > 0 && (
                  <>
                    <h6 className="mt-3">Options supplémentaires :</h6>
                    <ul className="list-unstyled">
                      {service.options.map((option, index) => (
                        <li key={index}>➕ {option}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="text-muted">
                  ⏳ Livraison : <strong>{service.delai_livraison}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;