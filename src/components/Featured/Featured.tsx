import React from "react";
import { BsMailbox } from "react-icons/bs";
type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="flex flex-col-reverse items-center gap-4 h-screen md:flex-row">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam voluptatem eaque hic corrupti asperiores placeat, quas
            pariatur, magnam voluptatum recusandae quia? Quam possimus error
            pariatur necessitatibus consectetur aperiam. Odio!
          </p>
          <div className="flex gap-4 items-center">
            <p>Subscribe to the newletter!</p>
            <button className="btn btn-primary flex gap-2 items-center">
              <BsMailbox className="font-bold" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img src="/programming.png" alt="programming icon" className="w-3/5" />
      </div>
    </div>
  );
}
