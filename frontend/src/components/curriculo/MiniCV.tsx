import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Agnaldo Korb
					</span>
					<span>Engenheiro de Software em Formação</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Sou uma pessoa apaixonada por tecnologia, e atualmente estou 
                    cursando bacharelado em Engenharia de Software na Unicesumar. 
                    Meu sonho sempre foi fazer uma faculdade na área de desenvolvimento de software. 
                    Onde no ano de 2025 iniciei meu bacharelado.
                    Estou sempre buscando me aperfeiçoar nas últimas 
                    e mais avançadas tecnologias do mercado, para assim crescer profissionalmente.
				</p>
			</div>
		</div>
	)
}