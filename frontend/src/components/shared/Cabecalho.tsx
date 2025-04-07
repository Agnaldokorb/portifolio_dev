import Image from "next/legacy/image";
import Container from "./Container";
import Link from "next/link";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
         <header className="w-full flex items-center h-16 bg-black">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/trans_bg.png" alt="Logo" width={75} height={75} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center p-2"> 
                    <Link href="https://www.linkedin.com/in/agnaldo-korb/" target="_blank">
                        <Image src="/linkedin.svg" alt="linkedin" width={70} height={60} />
                    </Link>
                    <Link href="https://api.whatsapp.com/send/?phone=5547988815799&text&tipe=phone_number" target="_blank">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={70} height={50} />
                    </Link>
                    <Link href="https://github.com/Agnaldokorb" target="_blank">
                        <Image src="/github.svg" alt="GitHub" width={70} height={60} />
                    </Link>
                </div>
            </Container>
        </header>
    )    
}