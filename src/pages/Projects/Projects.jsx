import React from 'react'
import './projects.css'

import pg_agencia_viagensImg from "../../assets/img/projetos/agencia-viagens.webp";
import hdc_hostImg from "../../assets/img/projetos/hdc-host.webp";
import escritorio_advImg from "../../assets/img/projetos/escritorio-advocacia.webp";





export default function Projects() {
    return (
        <main>
            <section className="all-projects-section">
                <div className="container">

                    <h2 className="all-projects-title">Projetos</h2>
                    <p className="all-projects-subtitle">
                        Alguns projetos que desenvolvi para estudo e prática profissional.
                    </p>

                    <div className="all-projects-grid">

                        <article className="all-project-card card-gomundo">
                            <div className="all-project-card-img" aria-hidden="true">
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={pg_agencia_viagensImg} />
                                    <img src={pg_agencia_viagensImg} alt="Print da tela da GoMundo agência de viagens" />
                                </picture>
                                <div className="all-project-links">
                                    <a className="btn" href="https://github.com/AndressaCabrall/GoMundo-agencia-viagem" target="_blank" rel="noreferrer">GitHub</a>
                                    <a className="btn btn-primary" href="https://viagens.vendasonlinemkt.com.br" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                            <h3 className="all-project-name">GoMundo Agência de Viagens</h3>
                            <p className="all-project-desc">
                                Landing page para agência de viagens com foco em conversão. Design moderno, animações suaves em GSAP, seções para destinos e pacotes promocionais, interface responsiva e navegação otimizada.
                            </p>
                            <div className="all-project-tags">
                                <span className="tag">JavaScript</span>
                                <span className="tag">GSAP</span>
                                <span className="tag">HTML</span>
                                <span className="tag">CSS</span>
                            </div>
                        </article>

                        <article className="all-project-card card-hdchost">
                            <div className="all-project-card-img" aria-hidden="true">
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={hdc_hostImg} />
                                    <img src={hdc_hostImg} alt="Print da tela do Projeto Hdc Host" />
                                </picture>
                                <div className="all-project-links">
                                    <a className="btn" href="https://github.com/AndressaCabrall/projeto-hdc-host" target="_blank" rel="noreferrer">GitHub</a>
                                    <a className="btn btn-primary" href="https://hdchost.andressacabraltech.com.br/index.php" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                            <h3 className="all-project-name">HDC Host</h3>
                            <p className="all-project-desc">
                                Site institucional de hospedagem desenvolvido com HTML, CSS, PHP e MySQL. Layout responsivo com foco em clareza e usabilidade.
                            </p>
                            <div className="all-project-tags">
                                <span className="tag">HTML</span>
                                <span className="tag">CSS</span>
                                <span className="tag">PHP</span>
                                <span className="tag">MySQL</span>
                            </div>
                        </article>

                        <article className="all-project-card card-advocacia">
                            <div className="all-project-card-img" aria-hidden="true">
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={escritorio_advImg} />
                                    <img src={escritorio_advImg} alt="Print da tela do Projeto Escritório de Advocacia" />
                                </picture>
                                <div className="all-project-links">
                                    <a className="btn" href="https://github.com/AndressaCabrall/Escritorio-Advocacia" target="_blank" rel="noreferrer">GitHub</a>
                                    <a className="btn btn-primary" href="https://pearsonhardman.andressacabraltech.com.br" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                            <h3 className="all-project-name">Escritório de Advocacia</h3>
                            <p className="all-project-desc">
                                Site moderno e responsivo para escritório de advocacia, destacando serviços jurídicos e facilitando o contato com clientes.
                            </p>
                            <div className="all-project-tags">
                                <span className="tag">React</span>
                                <span className="tag">CSS</span>
                                <span className="tag">Vite</span>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

        </main>
    );
}

























