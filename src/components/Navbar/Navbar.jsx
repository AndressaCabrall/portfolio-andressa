import './Navbar.css'
import GithubIcon from "../../components/icons/GithubIcon.jsx";
import LinkedinIcon from "../../components/icons/LinkedinIcon.jsx";

export default function Navbar() {
  return (

    <header className='site-header'>
      <div className="container">
        <nav className='nav' aria-label='Navegação Principal'>
          <a className='brand' href="/">
            <img className='brand-logo' src="/Logo2.png" alt="Andressa Cabral" />

          </a>

          <ul className="nav-menu">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/projects">Projetos</a></li>
            <li><a className="nav-link" href="#about">Sobre Mim</a></li>
            <li><a className="nav-link" href="#contact">Contato</a></li>
          </ul>

          <div className='nav-social' aria-label='Redes Sociais'>
            <a className='nav-icon' href="https://github.com/AndressaCabrall" target='_blank' rel='noreferrer' arial aria-label='GitHub'> 

              <GithubIcon className="icon" />
                                                
            </a>
            <a className='nav-icon' href="https://www.linkedin.com/in/andressa-cabrall/" target='_blank' rel='noreferrer' aria-label='Linkedin'>

            <LinkedinIcon className="icon" />
            </a>



          </div>

        </nav >
      </div >

    </header >

  )
}














