import "./Contact.css";



export default function Home() {
      
   return (
        

<main>


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