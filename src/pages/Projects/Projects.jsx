import React from 'react'
import './projects.css'
import pg_pinterestImg from '../../assets/img/projetos/pagina-pinterest.webp'
import pg_agcortinasImg from '../../assets/img/projetos/ag-cortinas.webp'
import pg_agencia_viagensImg from '../../assets/img/projetos/agencia-viagens.webp'



export default function Projects() {
    return (
        <main>
            <section className="projects-section">
                <div className="container">
                    <h2 className="projects-title">Projetos</h2>
                    <p className="projects-subtitle">
                        Alguns projetos que desenvolvi para estudo e prática profissional.
                    </p>

                    <div className="projects-cards">

                    <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src={pg_agencia_viagensImg} alt="Print da tela da Gom Mundo agência de viagens" />
                            </div>

                            <div className="project-content">
                                <h3> GoMundo Agência de viagens</h3>
                                <p>
                                Landing page desenvolvida para agência de viagens com foco em conversão e experiência do usuário. Design moderno com seções estratégicas para destinos em destaque, pacotes promocionais e formulário de contato integrado. Interface responsiva, animações suaves e navegação otimizada para diferentes dispositivos.
                                </p>

                                <div className="project-tags">
                                    <span>JsScript</span>
                                    <span>Gsap</span>
                                    <span>HTML & CSS</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/GoMundo-agencia-viagem" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://viagens.vendasonlinemkt.com.br" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src={pg_pinterestImg} alt="Print da tela do Pagina clone do Pinterest" />
                            </div>

                            <div className="project-content">
                                <h3> Pagina inspirada no Pinterest</h3>
                                <p>
                                Aplicação web inspirada no Pinterest, desenvolvida com Python e Flask, onde implementei estrutura de rotas, renderização de páginas e realizei o deploy da aplicação. O projeto teve como foco o aprendizado prático de backend, organização da aplicação e fluxo entre páginas.
                                </p>

                                <div className="project-tags">
                                    <span>Html</span>
                                    <span>CSS</span>
                                    <span>Python</span>
                                    <span>Flask</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/Pagina-Fake-Pinterest" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://andressa.pythonanywhere.com/" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src={pg_agcortinasImg} alt="Pint da tela do site Ag Cortinas e Persianas" />
                            </div>

                            <div className="project-content">
                                <h3> AG cortinas e Persianas</h3>
                                <p>
                                Site institucional de cortinas e persianas, desenvolvido em WordPress como meu primeiro projeto na plataforma. Página única, com foco em apresentação dos serviços, navegação por âncoras, design clean em tons neutros e layout responsivo, priorizando experiência do usuário e clareza comercial.
                                </p>

                                <div className="project-tags">
                                    <span>WordPress</span>
                                    <span>Elementor</span>
                                    <span>Hostinger</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://agcortinas.andressacabraltech.com.br" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src=""  alt="" />
                            </div>

                            <div className="project-content">
                                <h3> Projeto em Construção</h3>
                                <p>
                                    Website em desenvolvimento.
                                </p>

                                <div className="project-tags">
                                    <span>React</span>
                                    <span>CSS</span>
                                    <span>Vite</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src=""  alt="" />
                            </div>

                            <div className="project-content">
                                <h3> Projeto em Construção</h3>
                                <p>
                                Website em desenvolvimento.
                                </p>

                                <div className="project-tags">
                                    <span>React</span>
                                    <span>CSS</span>
                                    <span>Vite</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img className="project-image" src="" alt="" />
                            </div>

                            <div className="project-content">
                                <h3> Projeto em Construção</h3>
                                <p>
                                Website em desenvolvimento.
                                </p>

                                <div className="project-tags">
                                    <span>React</span>
                                    <span>CSS</span>
                                    <span>Vite</span>
                                </div>

                                <div className="project-links">
                                <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </article>
                       

                    </div>
                </div>
            </section>

        </main>
    );
}

























