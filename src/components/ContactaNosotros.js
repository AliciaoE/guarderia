import React, { useState } from 'react';

const ContactaNosotros = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isMessageSent, setIsMessageSent] = useState(false); // Estado para controlar si se envió el mensaje

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);

    // Aquí puedes hacer cualquier acción para enviar el formulario
    // Por ejemplo, llamar a una API, enviar un correo electrónico, etc.

    // Después de enviar el formulario, establecemos el estado de mensaje enviado como verdadero
    setIsMessageSent(true);

    // Reiniciamos el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="ContactForm-container">
      <h2 className="ContactForm-title">Contacta con nosotros</h2>
      {isMessageSent ? (
        <p>Mensaje enviado con éxito. Nos pondremos en contacto contigo lo antes posible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> Nombre : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email"> Correo electrónico : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message"> Mensaje : </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactaNosotros;
