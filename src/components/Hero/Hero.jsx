import React from 'react'
import './Hero.css'
import theme_img from '../../assets/img/hero/img7.jpg'

const Hero = () => {
  return (

    <section id="hero" className="section-hero" aria-label="Seção de Apresentação" >

          <div className="hero-container">

          <h1 className="hero-title">

            <span className="t1">Andressa</span>{" "}
            <span className="t2">Cabral</span>
            <br />
            <span className="t3">Desenvolvedora</span>{" "}
            <span className="t4 gradient">front-end</span>
          </h1>

          <p className='hero-subtitle'>
            focada em interfaces modernas,
            responsivas e acessíveis, com código organizado e semântico.
          </p>

        </div>

    </section>
  )
}

export default Hero
