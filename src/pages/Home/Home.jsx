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

        </main >








    )
}