import "./About.css";


export default function Home() {
      
    return (
        

<main>

{/* Seção About*/}

<section id="about" className="about-section" aria-labelledby="about-title">
    <div className="container">

        <div className="about-content">


            <div className="about-body">
                <h2 id="about-title" className="about-title">Minha trajetória</h2>
                <p className="about-text">
                    Minha transição para o Front-end começou ao criar meu próprio site de cortinas e persianas em WordPress. Apesar de ter uma trajetória consolidada — 8 anos na área administrativa e 15 anos empreendendo —, percebi nesse processo que queria ir além da interface visual e entender como tudo funciona por trás da tela.
                </p>
                <p className="about-text">
                    Nos últimos anos, venho me dedicando ao estudo e à prática de desenvolvimento Front-end, criando projetos focados em interfaces responsivas, atenção aos detalhes, design e animações. Valorizo soluções elegantes, funcionais e uma boa experiência para o usuário.
                </p>
                <p className="about-text">
                    Busco uma oportunidade como desenvolvedora Front-end júnior ou estagiária, em formato remoto ou presencial, para continuar evoluindo tecnicamente e contribuir com um time engajado e criativo.
                </p>


                <ul className="about-softskills" aria-label="Soft skills">
                    <li className="softskill-chip">Proatividade</li>
                    <li className="softskill-chip">Organização</li>
                    <li className="softskill-chip">Comunicação</li>
                    <li className="softskill-chip">Autonomia</li>
                    <li className="softskill-chip">Trabalho em equipe</li>

                </ul>

                <p className="about-quote">
                    “Do WordPress ao React, avançando passo a passo com consistência.”
                </p>

            </div>

        </div>

    </div>

</section>


</main >

       
    )
}