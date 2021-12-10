import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import hero from "../assets/hero.svg";
import star from "../assets/star.svg";
import book from "../assets/book.svg";
import cadastroImg from "../assets/cadastroImg.svg";
import plataformaImg from "../assets/plataformaImg.svg";
import { Container } from "@mui/material";
import * as Yup from "yup";
import {
  ButtonStyled,
  Cadastro,
  Footer,
  Introduction,
  Plataforma,
} from "../styles/pages/Home";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Home: NextPage = () => {
  return (
    <Container sx={{ marginTop: "100px", maxWidth: "1000px" }}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Introduction>
        <div className={"c-grid1"}>
          <h1>Dar acesso a educação atraves da tecnologia.</h1>
          <div className={"c-image-container"}>
            <Image
              src={hero}
              alt='Criança com roupa de formatura segurando uma maçã'
            />
          </div>
        </div>
        <ul className={"c-grid2"}>
          <li>
            <div>
              <Image src={book} alt='Livro' />
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
              <Image src={star} alt='Estrela' />
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
              <Image src={book} alt='Livro' />
            </div>
            <h3>Plataforma criada pensando na acessibilidade.</h3>
            <hr />
            <p>
              A plataforma foi criada já pensada em atender os mais diversos
              alunos e suas necessidades, se houver uma necessidade não
              atendida, faremos o possível para conseguir dar acesso a educação
              para o aluno.
            </p>
          </li>
        </ul>
      </Introduction>
      <Cadastro>
        <div className={"c-text-grid"}>
          <hr />
          <h2>Cadastro</h2>
          <div>
            <p>
              Temos dois processos padrões para o cadasteo do aluno. O Primeiro
              sendo as escolas já cadatradas em nosso sistema, passam para nós
              os alunos que eles não conseguiram inserir dentro da escola, por
              motivos de não ter estrutura adequada para o acesso do aluno ou
              falta de vagas, entre outros motivos. A Segunda forma são as
              inscrições individuais, onde os pais passam a nos contatar e
              passando por todo um processo para podermos entender a sua
              situação.
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
      </Cadastro>
      <Plataforma>
        <div className={"c-text-grid"}>
          <hr />
          <h2>Plataforma de ensino</h2>
          <h4>Acessibilidade</h4>
          <p>
            Uma plataforma já pensada em acessibilidade para dar suporte aos
            alunos com necessidades especiais, tendo funcionalizades como
            <strong> sistema de voz e leitura de tela</strong> para navegação e
            <strong> mudança de cores</strong> para visualização.
          </p>

          <h4>Gamificação</h4>
          <p>
            A nossa plataforma utiliza da gamificação como principal método de
            ensino principal, criando aulas dinâmicas e com maior participação
            do aluno, utilizando desafios individuais e em grupo com recompensas
            como icones de perfil personalizados entre outros, com isso os
            desafios em equipe criam uma turma mais proativa e desenvolve o
            trabalho em equipe. Ao lado temos um exemplo dos desafios
            individuais e abaixo os em grupos.
          </p>
        </div>
        <div className={"c-image-grid"}>
          <Image
            src={plataformaImg}
            alt='Um aplicativo mobile onde o aluno vai fazer seus desafios individuais e reforçar os conhecimentos adquiridos em aula, com uma foto de perfil personalizável pelo aluno, nome do aluno e barra de xp como cabeçalho da aplicação na parte superior do celular, a baixo disso tendo a área da pergunta e respostas com a pergunta no meio do celular, um temporiador mostrando o tempo restante para essa pergunta e as respostas logo a baixo do pergunta, podendo ser tanto multiplá escolha quanto verdadeiro ou falso e na parte mais inferior do celular um botão para enviar a resposta e ir para a próxima pergunta.'
          />
        </div>
      </Plataforma>
      <Footer>
        <h2>O seu comentário é bem-vindo</h2>
        <p>
          A nossa plataforma veio com o intuito de dar acesso a educação as
          pessoas em funerabilidade social, economica, física entre outras, com
          esse pensamento acreditamos que sempre podemos melhorar e aceita-mos
          de braços abertos dúvidas e sugestões de melhorias e locais que
          podemos dar mais atenção em nossa plataforma e serviço. Para isso
          deixamos um formulário onde pode escolher entre sugestão ou dúvida e
          enviar para nós, responderemos o mais breve possível. Obrigado desde
          já 💖.
        </p>
        <div>
          <Formik
            initialValues={{ mensagem: "", email: "", typeOfSuggestion: "" }}
            validationSchema={Yup.object({
              mensagem: Yup.string()
                .max(1200, "Must be 1200 characters or less")
                .required("Required"),
              typeOfSuggestion: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                console.log("alo");
                setSubmitting(false);
              }, 400);
            }}>
            <Form>
              <label htmlFor='typeOfSuggestion'>
                Qual tipo de mensagem seria ?
              </label>
              <Field
                component='select'
                id='typeOfSuggestion'
                name='typeOfSuggestion'
                multiple={false}>
                <option value='Dv'>Dúvida</option>
                <option value='Sj'>Sugestão</option>
              </Field>
              <ErrorMessage name='typeOfSuggestion' />

              <label htmlFor='mensagem'>Mensagem</label>
              <Field name='mensagem' type='text' />
              <ErrorMessage name='mensagem' />

              <label htmlFor='email'>Email Address</label>
              <Field name='email' type='email' />
              <ErrorMessage name='email' />

              <button type='submit'>Submit</button>
            </Form>
          </Formik>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
