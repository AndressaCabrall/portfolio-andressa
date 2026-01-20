import "./Home.css";
import profile_photo from '../../assets/img/perfil/profile-photo.jpeg'
import hdc_hostImg from '../../assets/img/projetos/hdc-host.png'
import escritorio_advImg from '../../assets/img/projetos/escritorio-advocacia.png' 
import delicias_cafesImg from '../../assets/img/projetos/delicias-paes-cafes.png'


export default function Home() {
    return (

        <main>

            {/* Seção Hero*/}

            <section  id="hero" className="hero-section">

            <header >
                <div className="container">

                    <div className="hero-media">

                        <img className="hero-photo" src={profile_photo} alt="Foto de Andressa" />

                    </div>

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
                        <a className="btn" href="#contact">Contato</a>

                    </div>

                </div>
            </header>

            </section>

           
            {/* Seção Skills*/}

            <section id="skills" className="skills-section">
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
                                <img className="skill-icon-img" src="/icons/html5.svg" alt="Icone do HTML" />
                                <span className="skill-name">HTML</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/css-sem-fundo.svg" alt="Icone do CSS" />
                                <span className="skill-name">CSS3</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/javascript-sem-fundo.svg" alt="Icone do JavaScript" />
                                <span className="skill-name">JavaScript</span>

                            </li>

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/react.svg" alt="Icone do React JS" />
                                <span className="skill-name">React JS</span>

                            </li>

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/git.svg" alt="Icone do Git" />
                                <span className="skill-name">Git</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/github.svg" alt="Icone do GitHub" />
                                <span className="skill-name">GitHub</span>

                            </li>

                        </ul>
                    </div>

                    <div className="skills-block">

                        <h3 className="block-title">Aprendendo</h3>

                        <ul className="skills-grid" aria-label="Tecnologias que estou aprendendo">

                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/typescript.svg" alt="Icone do TypeScript" />
                                <span className="skill-name">TypeScript</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/nodedotjs.svg" alt="Icone do Node JS" />
                                <span className="skill-name">Node JS</span>

                            </li>
                            <li className="skill-card">
                                <img className="skill-icon-img" src="/icons/figma.svg" alt="Icone do Figma" />
                                <span className="skill-name">Figma</span>

                            </li>


                        </ul>

                    </div>

                </div>

            </section>

            {/* Seção Projetos*/}

            <section id="projects" className="projects-section">
                <div className="container">
                    <h2 className="projects-title">Projetos</h2>

                    <p className="projects-subtitles">
                        Alguns projetos que mostram minhas habilidades.
                    </p>

                    <div className="projects-grid">
                        <article className="project-card">
                            <div className="project-thumb" aria-hidden="true">

                            <img className="project-image" src={hdc_hostImg} alt="Print da tela do Projeto Hdc Host" />

                            </div>

                            <h3 className="project-name">HDC HOST</h3>
                            <p className="project-desc">
                                Descrição curta do que esse projeto faz e qual problema resolve.
                            </p>

                            <div className="project-actions">
                                <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                            </div>

                        </article>

                        <article className="project-card">
                            <div className="project-thumb" aria-hidden="true">

                            <img className="project-image" src={escritorio_advImg} alt="Print da tela do Projeto Escritório de Advocacia" />
                            </div>

                            <h3 className="project-name">Escritório Advocacia</h3>
                            <p className="project-desc">
                                Descrição curta do que esse projeto faz e qual problema resolve.
                            </p>

                            <div className="project-actions">
                                <a className="btn" href="https://github.com/AndressaCabrall/Escritorio-Advocacia" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-thumb" aria-hidden="true">

                            <img className="project-image" src={delicias_cafesImg} alt="Print da tela do Projeto Delicias Artesanais e Cafés" />  
                            </div>

                            <h3 className="project-name">Projeto 03</h3>
                            <p className="project-desc">
                                Descrição curta do que esse projeto faz e qual problema resolve.
                            </p>

                            <div className="project-actions">
                                <a className="btn" href="https://github.com/AndressaCabrall/Delicias-Artesanais-e-Cafes" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                            </div>

                        </article>
                    </div>

                    <div className="projects-footer">
                        <a className="btn" href="/projects">Ver todos os Projetos</a>
                    </div>
                </div>
            </section>

            {/* Seção About*/}

            <section id="about"  className="about-section">
                <div className="container">

                    <div className="about-content">


                        <div className="about-body">
                            <h2 className="about-title">Sobre Mim</h2>
                            <p className="about-text">
                                Minha transição para Front-end começou quando eu decidi criar o meu próprio site
                                de cortinas e persianas no WordPress. Eu já tinha uma bagagem sólida:
                                8 anos no administrativo e 15 anos empreendendo, mas foi ali que eu percebi que
                                o que eu queria de verdade era entender como as coisas funcionam por trás da tela —
                                e codar.
                            </p>
                            <p className="about-text">
                                Desde então, venho estudando há 1 ano e construindo projetos com foco em interfaces responsivas, design e animações. Busco uma oportunidade como estagiária/júnior (remoto ou presencial) para evoluir e colaborar com um time.
                            </p>

                            <ul className="about-softskills" aria-label="Soft skills">
                                <li className="softskill-chip">Proatividade</li>
                                <li className="softskill-chip">Organização</li>
                                <li className="softskill-chip">Comunicação</li>
                                <li className="softskill-chip">Autonomia</li>
                                <li className="softskill-chip">Trabalho em equipe</li>

                            </ul>

                            <div className="about-actions">
                                <a className="btn btn-primary" href="/cv-andressa.pdf" download>Currículo para Download</a>

                                <a className="btn" href="https://wa.me/5583986844430" target="_blank"
                                    rel="noreferrer">WhatsApp</a>

                            </div>

                            <p className="about-quote">
                                “Do WordPress ao React: um passo por vez, com consistência..”
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Seção Contact*/}

            <section  id="contact"className="contact-section">
                <div className="container">
                    <h2 className="contact-title">Contato</h2>
                    <p className="contact-subtitle">Quer conversar sobre oportunidades, projetos ou freelas</p>

                    <div className="contact-links">
                        <a href="mailto:andressagclima@gmail.com" className="btn btn-primary" target="_blank" rel="noreferrer">Email</a>

                        <a href="https://wa.me/5583986844430" className="btn" target="_blank" rel="noreferrer">WhatsApp</a>

                        <a href="https://www.linkedin.com/in/andressa-cabrall/" className="btn" target="_blank" rel="noreferre">LinkedIn</a>

                        <a href="https://github.com/AndressaCabrall" className="btn" target="_blank" rel="noreferre">GitHub</a>

                    </div>

                    <p className="contact-note">📍 Disponível para estágio/júnior — remoto ou presencial (ajuste como preferir).</p>


                </div>

            </section>
        </main >

    )
}