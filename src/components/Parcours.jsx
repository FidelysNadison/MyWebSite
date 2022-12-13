import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
          
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(126, 87, 194)', color: '#ffff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(126, 87, 194)' }}
    date=" Sept 22 - Dec 1 " 
  >
    <h3 className="vertical-timeline-element-title">ESGI</h3>
    <h4 className="vertical-timeline-element-subtitle">1ère année Bachelor en Informatique</h4>
    <ul class="text-base list-disc text-white dark:text-gray-400">
      <li>Développer et modéliser des Bases de données (Langages C, Algorithme et langage SQL)</li>
      <li>Développer un site Web (HTML, CSS, PHP, JavaScript et Web API Fetch)</li>
      <li>Gérer des systèmes de réseaux informatiques (Linux et Windows)</li>
      <li>Analyser des process de gestion d‘entreprise (VBA Excel)</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="Janv 22 - Août 22"
  >
    <h3 className="vertical-timeline-element-title">BeCode</h3>
    <h4 className="vertical-timeline-element-subtitle">Développeur Web Junior</h4>
      <ul class="text-base list-disc text-white-400 dark:text-gray-400">
        <li>Programmer dans des langages informatiques spécifiques (Html, Css,JavaScript, PhP et MySql)</li>
        <li>Travailler en équipe et en mode projet (GitHub, Commandes Git,Trello)</li>
        <li>Présenter et convaincre de la pertinence de la solution développée.</li>
        <li>Créer des site web à l’aide du librairie REACT</li>   
        <li>Utiliser des frameworks ( Boostrap , Figma )</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(126, 87, 194)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(126, 87, 194)' }}
    date="Août 22 - Dec 22"
  >
    <h3 className="vertical-timeline-element-title">OpenClassroom</h3>
    <h4 className="vertical-timeline-element-subtitle">Développeur Web</h4>
      <ul class="text-base list-disc text-white dark:text-gray-400">
        <li>Créer un site Web avec Html et Css</li>
        <li>Utiliser les commandes dans un terminal</li>
        <li>Ecrire du JavaScript pour le Web</li>
        <li>Concevoir un site Web avec PhP et MySql</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">E-Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Communication Audiovisuel et Numerique</h4>
      <ul class="text-base list-disc text-white dark:text-gray-400">
        <li>Préparer et réaliser des prises de vues photographiques.</li>
        <li>Cadrer des vidéos et concevoir un mini-reportage (Adobe Premier Pro et After Effect)</li>
        <li>Développer un site web statique avec Html et Css</li>   
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(126, 87, 194)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(126, 87, 194)' }}
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffff' }}
  >
    <h3 className="vertical-timeline-element-title">NEXTA</h3>
    <h4 className="vertical-timeline-element-subtitle">Rédaction web et Marketing digital</h4>
      <ul class="text-base list-disc text-white dark:text-gray-400">
        <li>Animer une communauté web (Community Management)</li>
        <li>Alimenter des réseaux sociaux et traiter les informations</li>
        <li>Évaluer l'e-réputation d'un site web</li>
      </ul>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
      </section>
    </div>
  );
}
