import Image from "next/image";
import React from "react";
import { CadastroStyle } from "../styles/pages/Home";
import cadastroImg from "../assets/cadastroImg.svg";
export function Cadrastro() {
  return (
    <CadastroStyle>
      <div className={"c-text-grid"}>
        <hr />
        <h2>Cadastro</h2>
        <div>
          <p>
            Temos dois processos padrões para o cadasteo do aluno. O Primeiro
            sendo as escolas já cadatradas em nosso sistema, passam para nós os
            alunos que eles não conseguiram inserir dentro da escola, por
            motivos de não ter estrutura adequada para o acesso do aluno ou
            falta de vagas, entre outros motivos. A Segunda forma são as
            inscrições individuais, onde os pais passam a nos contatar e
            passando por todo um processo para podermos entender a sua situação.
          </p>
          <p>
            Para ambos os processos avaliamos a situação em que se encontra o
            aluno e caso precise, ajudamos com o acesso a internet e
            dispositivos para o acesso a nossa plataforma.
          </p>
        </div>
      </div>
      <div className={"c-image-grid"}>
        <Image
          src={cadastroImg}
          alt='Um aplicativo para cadrastro dos alunos, com um estudante mexendo no computador ouvindo musica com um headset na parte do app, em baixo do estudante um formulário pedindo o nome completo, data de nascimento e localidade com cidade - Estado do aluno e o email do responsável e um botão para o enviar os dados.'
        />
      </div>
    </CadastroStyle>
  );
}
