import React, { useState } from "react";
import { FooterStyle } from "../styles/pages/Home";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { writeUserData } from "../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

type formData = {
  mensagem: string;
  email: string;
  typeOfSuggestion: string;
};

export default function Formulário() {
  const [sendButtonState, setSendButtonState] = useState("Enviar Mensagem");
  const [disableButton, setDisableButton] = useState(false);
  function handleSubmit(values: formData) {
    const uid = uuidv4();
    const { mensagem, email, typeOfSuggestion } = values;
    writeUserData(
      uid,
      typeOfSuggestion,
      email,
      mensagem.replace(/ +(?= )/g, "")
    );
  }

  function alertForm() {
    if (typeof window !== "undefined") {
      window.alert("Dados do formulário inválidos");
    }
  }

  return (
    <FooterStyle>
      <h2>O seu comentário é bem-vindo</h2>
      <p>
        A nossa plataforma veio com o intuito de dar acesso a educação as
        pessoas em vulnerabilidade social, econômica, física entre outras, com
        esse pensamento acreditamos que sempre podemos melhorar e aceitamos de
        braços abertos dúvidas e sugestões de melhorias e locais que podemos dar
        mais atenção em nossa plataforma e serviço. Para isso deixamos um
        formulário onde pode escolher entre sugestão ou dúvida e enviar para
        nós, responderemos o mais breve possível. Obrigado desde já 💖.
      </p>

      <Formik
        initialValues={{ mensagem: "", email: "", typeOfSuggestion: "" }}
        validationSchema={Yup.object({
          mensagem: Yup.string()
            .min(5, "Mensagem muito pequena")
            .max(1200, "Mensagem muito grande")
            .required("Mensagem necessária"),
          typeOfSuggestion: Yup.string().required("Tipo necessário"),
          email: Yup.string()
            .email("Email inválido")
            .required("Email necessário"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          values.email = " ";
          values.mensagem = " ";
          values.typeOfSuggestion = " ";
          setSendButtonState("Enviado");
          setDisableButton(true);
          setSubmitting(false);
        }}>
        <Form>
          <div>
            <label htmlFor='typeOfSuggestion'>
              Escolha qual a categoria da mensagem.
            </label>
            <Field
              aria-required
              component='select'
              id='typeOfSuggestion'
              name='typeOfSuggestion'
              multiple={false}>
              <option value=''></option>
              <option value='Sj'>Sugestão</option>
              <option value='Dv'>Dúvida</option>
            </Field>
            <div className={"c-error-message"}>
              <ErrorMessage name='typeOfSuggestion' />
            </div>
          </div>
          <div>
            <label htmlFor='mensagem'>Mensagem</label>
            <Field
              aria-required
              rows='6'
              placeholder='Digite sua mensagem aqui.'
              className={"c-textarea"}
              name='mensagem'
              type='text'
              as='textarea'
            />
            <div className={"c-error-message"}>
              <ErrorMessage name='mensagem' />
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Field
              placeholder='Digite seu email'
              name='email'
              type='email'
              aria-required
            />
            <div className={"c-error-message"}>
              <ErrorMessage name='email' />
            </div>
          </div>
          <Button
            title={sendButtonState}
            disabled={disableButton}
            variant={"contained"}
            type='submit'>
            {sendButtonState}
          </Button>
        </Form>
      </Formik>
    </FooterStyle>
  );
}
