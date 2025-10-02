import React from 'react';
import { servicesData } from '../data/service-data';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <h1>services</h1>

      {servicesData.map((section, i) => (
        <div key={i}>
          <h2>{section.title}</h2>
          {section.services.map((service, j) => (
            <div key={j}>
              <h3>{service.name} - ${service.price}</h3>
              {service.description && <p>{service.description}</p>}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
}

export default ServicesPage;