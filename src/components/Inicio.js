import React from 'react';
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";


const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="text-container">
        <p className="paragraph">
          Somos una guardería de tradición familiar que combina los últimos sistemas pedagógicos para proporcionar un ambiente seguro y enriquecedor para todos los niños.  En nuestra guardería, creemos firmemente en el crecimiento individual y la autonomía de cada niño, ya que sabemos que cada uno es único y especial.
        </p>
        <div className="image-container">
        <img src={imagen1} alt="imagen1" />
        <img src={imagen2} alt="imagen2" />
        <img src={imagen4} alt="imagen4" />
        <img src={imagen5} alt="imagen5" />
      </div>
        <p className="paragraph2">
          Es fundamental que las guarderías cuenten con personal capacitado y cariñoso que se preocupe por el bienestar y el desarrollo integral de los niños. Los educadores de la guardería deben tener conocimientos sobre el desarrollo infantil y la forma de fomentar un ambiente de aprendizaje positivo y de apoyo.
        </p>

        <p className="paragraph3">
          Nuestro equipo de educadores altamente capacitados está comprometido a brindar una educación de calidad que fomente el desarrollo emocional, social y cognitivo de los niños. Nos enorgullecemos de crear un ambiente cálido y acogedor donde los niños puedan explorar, aprender y desarrollar sus habilidades únicas.
        </p>
      
        <p className="paragraph4">
          ¡Esperamos dar la bienvenida a tu hijo(a) a nuestra maravillosa comunidad y acompañarlos en su emocionante viaje de descubrimiento y crecimiento!
        </p>
    
      </div>
    </div>
  );
};

export default Inicio;
