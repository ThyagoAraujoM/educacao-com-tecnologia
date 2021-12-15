import Image from "next/image";
import React from "react";
import hero from "../assets/hero.svg";
import star from "../assets/star.svg";
import book from "../assets/book.svg";
import { IntroductionStyle } from "../styles/pages/Home";

export function Introduction() {
  return (
    <IntroductionStyle>
      <div className={"c-grid1"}>
        <h1>Dar acesso a educação através da tecnologia.</h1>
        <div className={"c-image-container"}>
          <Image
            src={hero}
            alt='Criança com roupa de formatura segurando uma maçã'
          />
        </div>
      </div>
      <ul role='list' className={"c-grid2"}>
        <li>
          <div>
            <Image src={book} alt='Livro branco em fundo laranja' />
          </div>
          <h3>Incentivo ao estudo</h3>
          <hr />
          <p>
            Ao final de cada ano letivo os melhores alunos iram receber
            presentes como notebooks ou celulares.
          </p>
        </li>
        <li>
          <div>
            <Image src={star} alt='Estrela branca em fundo laranja' />
          </div>
          <h3>
            Utilizando gamificação como um dos principais métodos de ensino.
          </h3>
          <hr />
          <p>
            Com desafios individuais e em grupo o aluno tem mais motivação e
            interesse em estudar.
          </p>
        </li>
        <li>
          <div>
            <Image src={book} alt='Livro branco em fundo laranja' />
          </div>
          <h3>Plataforma criada pensando na acessibilidade.</h3>
          <hr />
          <p>
            A plataforma foi criada já pensada em atender os mais diversos
            alunos e suas necessidades, se houver uma necessidade não atendida,
            faremos o possível para conseguir dar acesso a educação para o
            aluno.
          </p>
        </li>
      </ul>
    </IntroductionStyle>
  );
}
