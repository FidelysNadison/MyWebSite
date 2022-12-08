import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { parcours, projects } from "../data";

export default function Parcours() {
  return (
    <div>
      <section id="parcours">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <AcademicCapIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Parcours
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {parcours.map((parcours) => (
              <div key={parcours} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">
                    {parcours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
