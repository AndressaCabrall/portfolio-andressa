import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section-skills" aria-label="Habilidades e tecnologias">

      <div className="skills-container">

        <header className="skills-header">

          <h2 className="skills-title">SKILLS</h2>
          <p className="skills-subtitle">
            Tecnologias e práticas que uso para criar interfaces modernas, responsivas e acessíveis.
          </p>

        </header>

        <div className="skills-groups">

          <article className="skills-group" aria-label="Habilidades de Front-end">

            <h3 className="skills-group-title">Front-end</h3>

            <ul className="skills-list">
              
              <li className="skill-chip">HTML</li>
              <li className="skill-chip">CSS</li>
              <li className="skill-chip">JavaScript</li>
              <li className="skill-chip">React</li>
            </ul>
          </article>

          <article className="skills-group" aria-label="Layout e UI">
          
            <h3 className="skills-group-title">Layout & UI</h3>

            <ul className="skills-list">

              <li className="skill-chip">Flexbox</li>
              <li className="skill-chip">CSS Grid</li>
              <li className="skill-chip">Semântica HTML</li>
              <li className="skill-chip">Acessibilidade (ARIA)</li>
            </ul>
          </article>

          <article className="skills-group" aria-label="Ferramentas">

            <h3 className="skills-group-title">Ferramentas</h3>

            <ul className="skills-list">
              <li className="skill-chip">Git</li>
              <li className="skill-chip">GitHub</li>
              <li className="skill-chip">Vite</li>
              <li className="skill-chip">Npm</li>
            </ul>
            </article>

        </div>
      </div>
    </section>
  );
};

export default Skills;