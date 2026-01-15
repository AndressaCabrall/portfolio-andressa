import React from 'react'
import './Contact.css'

const Contact = () => {
  return (

    <section className='contact-section' aria-label='Contato'>

      <div className="contact-container">

        <header className='contact-header'>

          <h2 className='contact-title'>CONTATOS</h2>
          <p className='contact-subtitle'>Quer conversar sobre um projeto ou oportunidade? Me chame por aqui.</p>

        </header>

        <div className="contact-content">

          <address className='contact-card contact-address'>

            <p className='contact-text'>
              Estou disponível para oportunidades e freelas. Prefere e-mail ou mensagem? É só
              clicar em um dos botões abaixo.

            </p>

            <ul className='contact-actions'>

              <li>
                <a href="mailto:seuemail@exemplo.com" className='contact-btn' >Email</a>
              </li>

              <li>
                <a href="https://wa.me/55SEUNUMERO" className='contact-btn' target='_blank' rel='noreferrer' >WhatsApp</a>

              </li>

              <li>
                <a href="https://www.linkedin.com/in/seu-usuario/" className='contact-btn' target='_blank' rel='noreferrer' >LinkedIn</a>

              </li>

              <li>
                <a href="https://github.com/seu-usuario" className='contact-btn' target='_blank' rel='noreferrer' >GitHub</a>

              </li>

            </ul>

          </address>

          <div className="contact-card">

            <h3 className='contact-mini-title'>Preferências</h3>
            <ul className='contact-list'>

              <li>Resposta mais rápida: WhatsApp</li>
              <li>Propostas/briefing: Email</li>
              <li>Networking: LinkedIn</li>

            </ul>

          </div>

        </div>

      </div>

    </section>


  )
}

export default Contact