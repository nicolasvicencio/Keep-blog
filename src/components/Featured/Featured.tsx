import React from "react";
import { BsMailbox } from "react-icons/bs";
type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="flex flex-col-reverse items-center gap-4 h-[80vh] md:flex-row">
      <div className="flex flex-col gap-4 justify-center lg:w-[50%]">
        <h2 className="text-6xl">
          Keep <span className="highlight">Learning</span>
        </h2>
        <h2 className="text-6xl pl-10">
          Keep <span className="text-[#4538FF] highlight">Improving</span>
        </h2>
        <h2 className="text-6xl pl-20">
          Keep <span className="highlight">Sharing </span>
        </h2>
        <div className="flex flex-col gap-4 mt-10">
          <p>
            Bienvenido a Keep Blog, el mejor lugar para encontrar artículos
            interesantes e información valiosa. Compartir conocimientos es muy
            útil para formar una comunidad de programadores apasionados.
            Compartiremos artículos para ayudarte a estar al día de las últimas
            tendencias. Puedes suscribirte al newsletter, sin spam, y puedes
            darte de baja cuando quieras.
            <b className="text-[#6BAFC6]">Keep</b> going!.
          </p>
          <p>Subscribete a la newletter!</p>
          <div className="flex gap-4 items-center ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Ingresa tu email"
              className="bg-gray-900 p-3 rounded-sm text-sm"
            />
            <button className="btn btn-primary flex gap-2 items-center ">
              <BsMailbox className="font-bold" />
              Suscribirse
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img src="/programming.png" alt="programming icon" className="w-3/5 " />
      </div>
    </div>
  );
}
