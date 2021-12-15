import Image from "next/image";
import React from "react";
import groupchallengeimage from "../assets/groupchallengeimage.svg";
import { GroupChallengeStyle } from "../styles/pages/Home";
export function GroupChallenge() {
  return (
    <GroupChallengeStyle>
      <h3>
        Desafios em grupo são uma parte essencial em nosso método de ensino,
        criando um local onde o aluno se sente a vontade de se comunicar e
        participar.
      </h3>
      <Image
        src={groupchallengeimage}
        alt='Demostração de um desafio em grupo de 3 versus 3 alunos, que precisam responder corretamente as perguntas e se sim o foguete em cima deles vão voando a cada certa resposta para coroa e ganha quem chegar na coroa mais rápido'
      />
    </GroupChallengeStyle>
  );
}
