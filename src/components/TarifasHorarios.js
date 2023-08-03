import React from 'react';

const TarifasHorarios = () => {
  return (
    <div className="TarifasHorarios-container">
      
      <h3>Horario de la guardería</h3>
      <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
      <p>Acogida 7:00 AM</p>
      <p>Sábado y Domingo: Cerrado</p>

      <h3>Tarifas</h3>
      <p>Nuestras tarifas son competitivas y están diseñadas para brindar un servicio de alta calidad a precios asequibles para las familias. A continuación, se muestran nuestras tarifas:</p>
      <ul>
        <li>Tarifa mensual tiempo completo (de lunes a viernes): 275</li>
        <li>Tarifa mensual medio tiempo (mañanas ): 235</li>
        <li>Comedor diario: 6.90</li>
        <li>Comedor mensual: 145</li>
        <li>Precio acogida: 2h</li>
      </ul>

      <p>Además, ofrecemos descuentos especiales para hermanos y programas de apoyo financiero para familias que califican. Nuestro objetivo es garantizar que todos los niños tengan acceso a una educación de calidad en un ambiente seguro y enriquecedor.</p>
    </div>
  );
};

export default TarifasHorarios;

