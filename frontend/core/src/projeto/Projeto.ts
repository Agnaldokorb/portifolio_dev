
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

    constructor() {
        this.id = 0 // Valor inicial padrão
        this.nome = ""
        this.descricao = ""
        this.imagens = []
        this.tipo = Tipo.WEB
        this.nivel = Nivel.AVANCADO
        this.repositorio = ""
        this.destaque = false
        this.tecnilogias = []
    }   
}
