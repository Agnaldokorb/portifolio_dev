import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas";
import Experiencia from "./Experiencia";

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
    return (
        <div className="flex gap-4">
            <div className="flex-1"></div>
            <Experiencia />
            <TecnologiasTrabalhadas lista={props.tecnologias} />
        </div>
    )    
}