import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const IntroductionStyle = styled("div")`
  height: 991px;
  display: grid;
  grid:
    "grid1 grid1"
    "grid2 grid2";
  position: relative;
  align-content: space-around;

  .c-grid1 {
    grid-area: grid1;
    display: flex;
    gap: 30px;
    h1 {
      font-size: 58px;
      max-width: 542px;
      color: ${(props) => props.theme.palette.secondary.main};
      z-index: 1000;
    }

    .c-image-container {
      width: 733px;
      height: 750px;
      position: absolute;
      right: 0px;
      top: -20px;
      img {
        background: #fff2f3;
        border-radius: 10px;
      }
    }
    .c-image-container:after {
      content: "";
      width: 520px;
      height: 626px;
      position: absolute;
      background: #fff2f3;
      right: 0;
      border-radius: 2em;
      z-index: -1;
    }
  }

  .c-grid2 {
    grid-area: grid2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 100;

    li {
      list-style-type: none;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: space-around;
      box-shadow: 0px 0px 10px #0000004d;
      padding: 35px;
      gap: 20px;
      background: #fff;
      height: 100%;

      div {
        display: flex;
        align-content: center;
        justify-content: center;
        background: ${(props) => props.theme.palette.primary.main};
        border-radius: 50%;
        width: 72px;
        height: 72px;
      }

      h3 {
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.palette.secondary.main};
      }

      hr {
        background: ${(props) => props.theme.palette.primary.main};
        width: 50px;
        height: 2px;
        border: 0;
      }
      p {
        color: ${(props) => props.theme.palette.secondary.light};
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1200px) {
    .c-grid1 {
      .c-image-container {
        width: 400px;
        height: 400px;
        top: 0px;
      }
      .c-image-container:after {
        width: 400px;
        height: 400px;
      }
    }
  }

  @media (max-width: 900px) {
    height: 100%;
    padding: 0 0 50px 0;

    grid:
      "grid1" 500px
      "grid2" 1fr;

    .c-grid2 {
      grid-template-columns: 300px;
      justify-content: center;
    }
  }

  @media (max-width: 800px) {
    gap: 50px;
    grid:
      "grid1" 500px
      "grid2" 1fr;

    .c-grid1 {
      flex-direction: column;
      gap: 0px;
      h1 {
        font-size: 35px;
      }
      .c-image-container {
        max-width: 400px;
        max-height: 400px;
        position: static;
        background: #fff2f3;
        border-radius: 10px;
        align-self: end;
      }
      .c-image-container:after {
        background: #fff;
        width: 0px;
        height: 0px;
      }
    }
  }
  @media (max-width: 400px) {
    .c-grid1 {
      h1 {
        font-size: 30px;
      }

      .c-image-container {
        width: 100%;
        background: #fff;
      }
      .c-image-container:after {
        background: #fff;
      }
    }
    .c-grid2 {
      grid-template-columns: 1fr;
      li {
        padding: 15px;
      }
    }
  }
`;

export const CadastroStyle = styled("div")`
  width: 100%;
  display: grid;
  height: 760px;
  align-items: center;
  grid: "text image" / 1fr 1fr;
  gap: 30px;
  .c-text-grid {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 35px;
    max-width: 500px;
    hr {
      border: 0;
      width: 97px;
      height: 7px;
      background: ${(props) => props.theme.palette.primary.main};
    }
    h2 {
      font-size: 40px;
      color: ${(props) => props.theme.palette.secondary.main};
    }
    p {
      color: ${(props) => props.theme.palette.secondary.light};
    }
  }

  .c-image-grid {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(1fr, 400px);
    grid: "text" "image";
    justify-content: center;
    gap: 50px;
    height: 100%;
    padding: 0 0 50px 0;
  }
`;

export const PlataformaStyle = styled("div")`
  display: grid;
  grid: "image text " / 1fr 1fr;
  align-items: center;
  gap: 30px;
  height: 760px;

  .c-text-grid {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    hr {
      background: ${(props) => props.theme.palette.primary.main};
      width: 97px;
      border: 0;
      height: 7px;
    }

    h2 {
      color: ${(props) => props.theme.palette.secondary.main};
      font-size: 40px;
    }

    h4 {
      font-size: 20px;
      font-weight: 700;
      color: ${(props) => props.theme.palette.secondary.main};
    }

    p {
      color: ${(props) => props.theme.palette.secondary.light};
    }
  }

  .c-image-grid {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    grid: "text" "image";
    grid-template-columns: minmax(1fr, 400px);
    justify-content: center;
    gap: 50px;
    height: 100%;
    padding: 0 0 50px 0;
  }
`;

export const GroupChallengeStyle = styled("div")`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  h3 {
    max-width: 800px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 16px;
    height: 500px;
  }
`;

export const FooterStyle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0 50px 0;
  gap: 30px;
  padding: 80px 0;
  h2 {
    font-size: 40px;
    max-width: 650px;
  }
  p {
    max-width: 653px;
    color: ${(props) => props.theme.palette.secondary.light};
    font-size: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 3px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 10px;
    padding: 25px;
    width: 400px;
    font-size: 20px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .c-error-message {
        color: #e19393;
      }
    }

    select {
      font-size: 14px;
      border: 1px solid ${(props) => props.theme.palette.secondary.main};
      outline: none;
    }

    .c-textarea {
      padding: 10px;
      border: 1px solid ${(props) => props.theme.palette.secondary.main};
      border-radius: 10px;
      width: 100%;
    }

    input {
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.palette.secondary.main};
      padding: 10px;
      font-size: 16px;
      width: 100%;
    }

    button {
      align-self: center;
    }

    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
      box-shadow: none;
    }
  }

  @media (max-width: 520px) {
    form {
      width: 100%;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  height: 100%;
  background: #96bb7c;

  &:hover {
    background: #96bb7c;
    filter: brightness(0.9);
  }
`;
