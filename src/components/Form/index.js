import InputText from "../InputText"
import ListaSuspensa from "../ListaSuspensa"
import Button from "../Button"
import './Form.css'
import { useState } from "react"

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'UX e Design',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('foi submetido! =>', nome, cargo, imagem, time)
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <InputText 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <InputText 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <InputText
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado= {valor => setTime(valor)}
                    />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form