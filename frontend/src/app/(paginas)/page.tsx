import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { obterTecnologoas } from "@/functions/tecnologias";


export default async function Home() {
  
  const tecnologias = await obterTecnologoas()
  const projetos = await obterProjetos()

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques} />
      <Container className="py-16 flex flex-col items-center gap-10">
        <Projetos titulo="Destaques" lista={projetos.destaques} />
        <Projetos titulo="Mobile" lista={projetos.mobile} />
        <Projetos titulo="web" lista={projetos.web} />
        <Projetos titulo="Jogos" lista={projetos.jogos} />
        <Curriculo tecnologias={tecnologias.todas}/>
      </Container>
    </div>
  )
}
