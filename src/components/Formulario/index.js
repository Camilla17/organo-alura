import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });

    setNome('') 
    setCargo('') 
    setImagem('') 
    setTime('') 
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
      <h3>Preencha os dados para criar o card do colaborador</h3>
        <CampoTexto
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          label="Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          placeholder="Digite seu endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          label="Time"
          itens={props.times}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
