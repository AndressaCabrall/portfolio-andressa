import "./Home.css";

export default function Home() {
    return (

        <main>

            <header className="hero-section">
                <div className="container">

                    <p className="hero-eyebrow">
                        Front-end Developer
                    </p>
                    <h1 className="hero-title">
                        Oi, eu sou a Andressa.</h1>
                    <p className="hero-subtitle">
                        Construo interfaces modernas, focadas em clareza, acessibilidade e boa experiência.
                    </p>


                    <div className="actions">
                        <a className="btn btn-primary" href="/projects">Ver Projetos</a>
                        <a className="btn" href="/#contact">Contato</a>

                    </div>

                </div>
            </header>

            <section className="skills-section">
                <div className="container">
                    <h2 className="skills-title">
                        Skills
                    </h2>
                    <p className="skills-subtitle">
                        Linguagens, frameworks, ferramentas e tecnologias auxiliares que eu uso e estou estudando.
                    </p>

                    <div className="skills-block">

                        <h3 className="block-title">Uso no dia a dia</h3>

                        <ul className="skills-grid" aria-label="Tecnologias que uso no dia a dia">

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/html5.svg" alt="" />
                                <span className="skill-name">HTML</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/css-sem-fundo.svg" alt="" />
                                <span className="skill-name">CSS3</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/javascript-sem-fundo.svg" alt="" />
                                <span className="skill-name">JavaScript</span>

                            </li>

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/react.svg" alt="" />
                                <span className="skill-name">React JS</span>

                            </li>

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/git.svg" alt="" />
                                <span className="skill-name">Git</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/github.svg" alt="" />
                                <span className="skill-name">GitHub</span>

                            </li>

                        </ul>
                    </div>

                    <div className="skills-block">

                        <h3 className="block-title">Aprendendo</h3>

                        <ul className="skills-grid" aria-label="Tecnologias que estou aprendendo">

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/typescript.svg" alt="" />
                                <span className="skill-name">TypeScript</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/nodedotjs.svg" alt="" />
                                <span className="skill-name">Node JS</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/figma.svg" alt="" />
                                <span className="skill-name">Figma</span>

                            </li>


                        </ul>

                    </div>

                </div>

            </section>

            <section className="projects-section">
  <div className="container">
    <h2 className="projects-title">Projetos</h2>

    <p className="projects-subtitles">
      Alguns projetos que mostram minhas habilidades.
    </p>

    <div className="projects-grid">
      <article className="project-card">
        <div className="project-thumb" aria-hidden="true"></div>

        <h3 className="project-name">Projeto 01</h3>
        <p className="project-desc">
          Descrição curta do que esse projeto faz e qual problema resolve.
        </p>

        <div className="project-tags" aria-label="Tecnologias">
          <span className="tag">React</span>
          <span className="tag">CSS</span>
          <span className="tag">API</span>
        </div>

        <div className="project-actions">
          <a className="btn" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Live</a>
        </div>
      </article>

      <article className="project-card">
        <div className="project-thumb" aria-hidden="true"></div>

        <h3 className="project-name">Projeto 02</h3>
        <p className="project-desc">
          Descrição curta do que esse projeto faz e qual problema resolve.
        </p>

        <div className="project-tags" aria-label="Tecnologias">
          <span className="tag">React</span>
          <span className="tag">CSS</span>
          <span className="tag">API</span>
        </div>

        <div className="project-actions">
          <a className="btn" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Live</a>
        </div>
      </article>

      <article className="project-card">
        <div className="project-thumb" aria-hidden="true"></div>

        <h3 className="project-name">Projeto 03</h3>
        <p className="project-desc">
          Descrição curta do que esse projeto faz e qual problema resolve.
        </p>

        <div className="project-tags" aria-label="Tecnologias">
          <span className="tag">React</span>
          <span className="tag">CSS</span>
          <span className="tag">API</span>
        </div>

        <div className="project-actions">
          <a className="btn" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Live</a>
        </div>
      </article>
    </div>

    <div className="projects-footer">
      <a className="btn" href="/projects">Ver todos os Projetos</a>
    </div>
  </div>
</section>

        </main >








    )
}