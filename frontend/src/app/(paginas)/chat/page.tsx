"use client"
import ConteudoMD from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import Image from "next/image"
import { useState } from "react"

export default function Chat() {
    const { chatId, mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")
    return(
        <div>
            <h1>Chat</h1>
            <h2>Chat Id: {chatId}</h2>
            <button onClick={limparMensagens}>Limpar</button>

            <ul>
               {mensagens.map((mensagem) => (
                    <li key={mensagem.id} className="flex flex-col gap-2">
                        <div>{mensagem.autor}</div>
                        <ConteudoMD markdown={mensagem.texto} />
                    </li>
                ))} 
            </ul>

            {pensando && (
                <div>
                    <Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
                </div>
            )}

            <input type="text"
                   value={texto} 
                   className="border border-gray-700 rounded-md p-2 w-full"
                   onChange={(e: any) => {
                    setTexto(e.target.value)                    
                }}
                onKeyDown={(e: any) => {
                    if (e.key === "Enter") {
                        adicionarMensagem(texto)
                        setTexto("") // Limpa o campo de texto após enviar a mensagem
                    }
                }}

            />
        </div>
    )
}