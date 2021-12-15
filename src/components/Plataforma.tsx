import Image from "next/image";
import React from "react";
import { PlataformaStyle } from "../styles/pages/Home";
import plataformaImg from "../assets/plataformaImg.svg";
export function Plataforma() {
  return (
    <PlataformaStyle>
      <div className={"c-text-grid"}>
        <hr />
        <h2>Plataforma de ensino</h2>
        <h4>Acessibilidade</h4>
        <p>
          Uma plataforma já pensada em acessibilidade para dar suporte aos
          alunos com necessidades especiais, tendo funcionalidades como
          <strong> sistema de voz e leitura de tela</strong> para navegação e
          <strong> mudança de cores</strong> para visualização.
        </p>

        <h4>Gamificação</h4>
        <p>
          A nossa plataforma utiliza da gamificação como principal método de
          ensino, criando aulas dinâmicas e com maior participação do aluno,
          utilizando desafios individuais e em grupo com recompensas como ícones
          de perfil personalizados entre outros, com isso os desafios em equipe
          criam uma turma mais proativa e desenvolve o trabalho em equipe. Ao
          lado temos um exemplo dos desafios individuais e abaixo os em grupos.
        </p>
      </div>
      <div className={"c-image-grid"}>
        <Image
          src={plataformaImg}
          alt='Um aplicativo mobile onde o aluno vai fazer seus desafios individuais e reforçar os conhecimentos adquiridos em aula, com uma foto de perfil personalizável pelo aluno, nome do aluno e barra de experiência como cabeçalho da aplicação na parte superior do celular, a baixo disso tendo a área da pergunta e respostas com a pergunta no meio do celular, um temporiador mostrando o tempo restante para essa pergunta e as respostas logo a baixo do pergunta, podendo ser tanto multiplá escolha quanto verdadeiro ou falso e na parte mais inferior do celular um botão para enviar a resposta e ir para a próxima pergunta.'
        />
      </div>
    </PlataformaStyle>
  );
}
