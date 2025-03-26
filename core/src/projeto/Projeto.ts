
import { Tipo } from './Tipo'
import { Nivel } from './Nivel'
import { Tecnologia } from '../tecnologia'

export default class Projeto {
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnilogias: Tecnologia[]  
}