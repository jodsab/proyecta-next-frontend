import React, { useState } from "react";
import Image from "next/image";
import personas from "./personas.json";
import edificios from "../../assets/edificios.jpg";
import persona1 from "../../assets/persona1.png";
import persona2 from "../../assets/persona2.png";
import persona3 from "../../assets/persona3.png";
import persona4 from "../../assets/persona4.png";
import persona5 from "../../assets/persona5.png";
import "./styles.scss";

const Comentarios = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);

  const handleClick = (persona) => {
    setSelectedPersona(persona);
  };

  const images = [persona1, persona2, persona3, persona4, persona5];
  return (
    <div className="comentarios_container">
      <div className="absolute_background">
        <div className="blank_screen"></div>
        <div className="edificios_screen">
          <Image src={edificios} alt="edificios proyecta" />
        </div>
      </div>
      <div className="comentarios_content">
        <p className="title">
          GENTE QUE <span className="bold">#PROYECTA</span>
        </p>
        <p className="bold subtitle">
          Invierte seguro, con alta rentabilidad y con respaldo
        </p>
        <div className="personas_desktop">
          {personas.slice(0, 2).map((persona, index) => (
            <div
              className="caras"
              key={persona.id}
              onClick={() => handleClick(persona)}
            >
              <Image
                src={images[persona.id - 1]}
                alt={`imagen de ${persona.nombre}`}
              />
            </div>
          ))}
          <div className="selectedPersona">
            <div className="cabeza">
              <Image
                src={images[selectedPersona.id - 1]}
                alt={`imagen de ${selectedPersona.nombre}`}
              />
              <div className="propietario">
                <p className="nombre">{selectedPersona.nombre}</p>
                <p className="cargo">{selectedPersona.estado}</p>
              </div>
            </div>
            <div className="cuerpo">
              <p>{selectedPersona.comentario}</p>
            </div>
          </div>
          {personas.slice(3, 5).map((persona, index) => (
            <div
              className="caras"
              key={persona.id}
              onClick={() => handleClick(persona)}
            >
              <Image
                src={images[persona.id - 1]}
                alt={`imagen de ${persona.nombre}`}
              />
            </div>
          ))}
        </div>
        <div className="personas_mobile">
          <div className="caras">
            {personas.map((persona, index) => (
              <div key={persona.id} onClick={() => handleClick(persona)}>
                <Image
                  src={images[persona.id - 1]}
                  alt={`imagen de ${persona.nombre}`}
                />
              </div>
            ))}
          </div>
          <div className="selectedPersona">
            <div className="cabeza">
              <Image
                src={images[selectedPersona.id - 1]}
                alt={`imagen de ${selectedPersona.nombre}`}
              />
              <div className="propietario">
                <p className="nombre">{selectedPersona.nombre}</p>
                <p className="cargo">{selectedPersona.estado}</p>
              </div>
            </div>
            <div className="cuerpo">
              <p>{selectedPersona.comentario}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
