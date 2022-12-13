import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";

export default function Parcours() {
  return (
    <div>
      <section id="parcours">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <AcademicCapIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              Parcours
            </h1>
          </div>

          <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-10 h-8 bg-white-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                <img src="./NEXTA.png" alt="logo-nexta"/>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept 21</time>
                <h2>NEXTA</h2>
                <h3>Rédaction web et Marketing digital</h3>
                <ul class="text-base font-normal text-gray-500 dark:text-gray-400">
                  <li>Animer une communauté web (Community Management)</li>
                  <li>Alimenter des réseaux sociaux et traiter les informations</li>
                  <li>Évaluer l'e-réputation d'un site web</li>
                </ul>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-10 h-8 bg-white-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                <img src="./E-media.png" alt="logo-Emedia"/>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov 21 - Juil 22</time>
                <h2>E-Media</h2>
                <h3>Communication Audiovisuel et Numerique</h3>
                <ul class="text-base font-normal text-gray-500 dark:text-gray-400">
                  <li>Préparer et réaliser des prises de vues photographiques.</li>
                  <li>Cadrer des vidéos et concevoir un mini-reportage (Adobe Premier Pro et After Effect)</li>
                  <li>Développer un site web statique avec Html et Css</li>
                </ul>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-10 h-8 bg-white-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                <img src="./OpenClassrooms.png" alt="logo-OpenClassroom"/>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Août 22 - Dec 22</time>
                <h2>OpenClassroom</h2>
                <h3>Développeur Web</h3>
                <ul class="text-base font-normal text-gray-500 dark:text-gray-400">
                  <li>Créer un site Web avec Html et Css</li>
                  <li>Utiliser les commandes dans un terminal</li>
                  <li>Ecrire du JavaScript pour le Web</li>
                  <li>Concevoir un site Web avec PhP et MySql</li>
                </ul>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-10 h-8 bg-white-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                <img src="./BeCode.png" alt="logo-BeCode"/>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janv 22 - Août 22</time>
                <h2>BeCode</h2>
                <h3>Développeur Web Junior</h3>
                <ul class="text-base font-normal text-gray-400 dark:text-gray-400">
                  <li>Programmer dans des langages informatiques spécifiques (Html, Css,JavaScript, PhP et MySql)</li>
                  <li>Travailler en équipe et en mode projet (GitHub, Commandes Git,Trello)</li>
                  <li>Présenter et convaincre de la pertinence de la solution développée.</li>
                  <li>Créer des site web à l’aide du librairie REACT</li>
                  <li>Utiliser des frameworks ( Boostrap , Figma )</li>
                </ul>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-10 h-8 bg-white-200 rounded-full ring-0 ring-white white:bg-white-900 sm:ring-1 whitering-white-900 shrink-0">
                <img src="./esgi.png" alt="logo-ESGI"/>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept 22 - Dec 1</time>
                <h2>ESGI</h2>
                <h3>1ère année Bachelor en Informatique</h3>
                <ul class="text-base font-normal text-gray-500 dark:text-gray-400">
                  <li>Développer et modéliser des Bases de données (Langages C, Algorithme et langage SQL)</li>
                  <li>Développer un site Web (HTML, CSS, PHP, JavaScript et Web API Fetch)</li>
                  <li>Gérer des systèmes de réseaux informatiques (Linux et Windows)</li>
                  <li>Analyser des process de gestion d‘entreprise (VBA Excel)</li>
                </ul>
              </div>
            </li>
          </ol>

        </div>
      </section>
    </div>
  );
}
