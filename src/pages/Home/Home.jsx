import "./Home.css";
import profile_photo from '../../assets/img/perfil/profile-photo.jpeg'
import hdc_hostImg from '../../assets/img/projetos/hdc-host.png'
import escritorio_advImg from '../../assets/img/projetos/escritorio-advocacia.png'
import delicias_cafesImg from '../../assets/img/projetos/delicias-paes-cafes.png'
import GithubIcon from "../../components/icons/GithubIcon.jsx";
import HtmlIcon from "../../components/icons/HtmlIcon.jsx";
import CssIcon from "../../components/icons/CssIcon.jsx";
import JsscriptIcon from "../../components/icons/JsscriptIcon.jsx";
import ReactIcon from "../../components/icons/ReactIcon.jsx";
import GitIcon from "../../components/icons/GitIcon.jsx";
import TypescriptIcon from "../../components/icons/TypescriptIcon.jsx";
import FigmaIcon from "../../components/icons/FigmaIcon.jsx";
import NodejsIcon from "../../components/icons/NodejsIcon.jsx";




export default function Home() {
    return (

        <main>

            {/* Seção Hero*/}

            <section id="hero" className="hero-section" aria-labelledby="hero-title">

                <header >
                    <div className="container">

                        <div className="hero-media">

                            <img className="hero-photo" src={profile_photo} alt="Foto de Andressa" />

                        </div>

                        <p className="hero-eyebrow">
                            Front-end Developer
                        </p>
                        <h1 id="hero-title" className="hero-title">
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
                    <h2 className="skills-title">Skills</h2>

                    <p className="skills-subtitle">
                        Linguagens, frameworks, ferramentas e tecnologias que utilizo no dia a dia
                        e estou estudando.
                    </p>

                    {/* USO NO DIA A DIA */}
                    <div className="skills-block">
                        <h3 className="block-title">Uso no dia a dia</h3>

                        <div className="skills-slider">
                            <ul className="skills-track">

                                {/* lista original */}
                                <li className="skill-card">
                                    <HtmlIcon className="icon" />
                                    <span>HTML</span>
                                </li>
                                <li className="skill-card">
                                    <CssIcon className="icon" />
                                    <span>CSS</span>
                                </li>
                                <li className="skill-card">
                                    <JsscriptIcon className="icon" />
                                    <span>JavaScript</span>
                                </li>
                                <li className="skill-card">
                                    <ReactIcon className="icon" />
                                    <span>React</span>
                                </li>
                                <li className="skill-card">
                                    <GitIcon className="icon" />
                                    <span>Git</span>
                                </li>
                                <li className="skill-card">
                                    <GithubIcon className="icon" />
                                    <span>GitHub</span>
                                </li>

                                {/* lista duplicada */}
                                <li className="skill-card">
                                    <HtmlIcon className="icon" />
                                    <span>HTML</span>
                                </li>
                                <li className="skill-card">
                                    <CssIcon className="icon" />
                                    <span>CSS</span>
                                </li>
                                <li className="skill-card">
                                    <JsscriptIcon className="icon" />
                                    <span>JavaScript</span>
                                </li>
                                <li className="skill-card">
                                    <ReactIcon className="icon" />
                                    <span>React</span>
                                </li>
                                <li className="skill-card">
                                    <GitIcon className="icon" />
                                    <span>Git</span>
                                </li>
                                <li className="skill-card">
                                    <GithubIcon className="icon" />
                                    <span>GitHub</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* APRENDENDO */}
                    <div className="skills-block">
                        <h3 className="block-title">Aprendendo</h3>

                        <div className="skills-slider reverse">
                            <ul className="skills-track">
                                <li className="skill-card">
                                    <TypescriptIcon className="icon" />
                                    <span>TypeScript</span>
                                </li>
                                <li className="skill-card">
                                    <NodejsIcon className="icon" />
                                    <span>Node.js</span>
                                </li>
                                <li className="skill-card">
                                    <FigmaIcon className="icon" />
                                    <span>Figma</span>
                                </li>

                                {/* duplicados */}
                                <li className="skill-card">
                                    <TypescriptIcon className="icon" />
                                    <span>TypeScript</span>
                                </li>
                                <li className="skill-card">
                                    <NodejsIcon className="icon" />
                                    <span>Node.js</span>
                                </li>
                                <li className="skill-card">
                                    <FigmaIcon className="icon" />
                                    <span>Figma</span>
                                </li>

                                {/* duplicados */}
                                <li className="skill-card">
                                    <TypescriptIcon className="icon" />
                                    <span>TypeScript</span>
                                </li>
                                <li className="skill-card">
                                    <NodejsIcon className="icon" />
                                    <span>Node.js</span>
                                </li>
                                <li className="skill-card">
                                    <FigmaIcon className="icon" />
                                    <span>Figma</span>
                                </li>
                                {/* duplicados */}
                                <li className="skill-card">
                                    <TypescriptIcon className="icon" />
                                    <span>TypeScript</span>
                                </li>
                                <li className="skill-card">
                                    <NodejsIcon className="icon" />
                                    <span>Node.js</span>
                                </li>
                                <li className="skill-card">
                                    <FigmaIcon className="icon" />
                                    <span>Figma</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Seção Projetos*/}

            <section id="projects" className="projects-section" aria-labelledby="projects-title">
                <div className="container">
                    <h2 id="projects-title" className="projects-title">Projetos</h2>

                    <p className="projects-subtitle">
                        Alguns projetos que mostram minhas habilidades.
                    </p>

                    <div className="projects-grid">
                        <article className="project-card">
                            <div className="project-thumb" aria-hidden="true">

                                <img className="project-image" src={hdc_hostImg} alt="Print da tela do Projeto Hdc Host" />

                            </div>

                            <h3 className="project-name">HDC HOST</h3>
                            <p className="project-desc">
                                Site institucional de hospedagem (HDC Host), desenvolvido com HTML, CSS, PHP e MySQL, com layout responsivo.
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

                            <h3 className="project-name">Delicias Artesanais e Cafés</h3>
                            <p className="project-desc">
                                Site de pães artesanais e cafés, desenvolvido com HTML, CSS e JavaScript, com layout responsivo.
                            </p>

                            <div className="project-actions">
                                <a className="btn" href="https://github.com/AndressaCabrall/Delicias-Artesanais-e-Cafes" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://delicias.paesecafes.andressacabraltech.com.br/" target="_blank" rel="noreferrer">Live</a>
                            </div>

                        </article>
                    </div>

                    <div className="projects-footer">
                        <a className="btn" href="/projects">Ver todos os Projetos</a>
                    </div>
                </div>
            </section>

            {/* Seção About*/}

            <section id="about" className="about-section" aria-labelledby="about-title">
                <div className="container">

                    <div className="about-content">


                        <div className="about-body">
                            <h2 id="about-title" className="about-title">Sobre Mim</h2>
                            <p className="about-text">
                            Minha transição para o Front-end começou quando decidi criar meu próprio site de cortinas e persianas em WordPress. Apesar de já ter uma trajetória consolidada — 8 anos de experiência na área administrativa e 15 anos empreendendo — foi nesse processo que percebi que queria ir além da interface visual e entender, de fato, como tudo funciona por trás da tela.
                            </p>
                            <p className="about-text">
                            Há cerca de 1 ano, venho me dedicando ao estudo e à prática de desenvolvimento Front-end, criando projetos com foco em interfaces responsivas, atenção a detalhes, design e animações. Busco uma oportunidade como desenvolvedora Front-end júnior ou estagiária, em formato remoto ou presencial, para evoluir tecnicamente e colaborar com um time.
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

            <section id="contact" className="contact-section" aria-labelledby="contact-title">
                <div className="container">
                    <h2 id="contact-title" className="contact-title">Contato</h2>
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