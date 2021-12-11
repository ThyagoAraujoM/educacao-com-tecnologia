import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const Introduction = styled("div")`
  display: grid;
  height: 991px;
  grid:
    "grid1 grid1"
    "grid2 grid2";
  position: relative;
  align-content: space-around;

  .c-grid1 {
    grid-area: grid1;
    display: flex;
    gap: 30px;
    z-index: 1;
    h1 {
      font-size: 58px;
      max-width: 542px;
      color: #252b42;
      z-index: 10;
    }

    .c-image-container {
      width: 733px;
      height: 750px;
      position: absolute;
      right: 0px;
      top: -20px;
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
        background: #e74040;
        border-radius: 50%;
        width: 72px;
        height: 72px;
      }

      h3 {
        font-size: 20px;
        font-weight: 700;
      }
      hr {
        background: #e74040;
        width: 50px;
        height: 2px;
        border: 0;
      }
      p {
        color: #737373;
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
        content: "";
        width: 400px;
        height: 400px;
        position: absolute;
        background: #fff2f3;
        right: -20px;
        border-radius: 2em;
        z-index: -1;
      }
    }
  }
  @media (max-width: 900px) {
    display: grid;
    height: 100%;
    gap: 0px;
    padding: 0 0 50px 0;
    grid:
      "grid1" 500px
      "grid2" 1fr;

    .c-grid2 {
      grid-template-columns: 300px;
      justify-content: center;
    }
  } ;
`;

export const Cadastro = styled("div")`
  display: grid;
  height: 760px;
  align-items: center;
  grid: "text image" / 1fr 1fr;
  gap: 30px;
  .c-text-grid {
    grid-area: text;
    display: flex;
    gap: 35px;
    flex-direction: column;
    hr {
      border: 0;
      width: 97px;
      height: 7px;
      background: #e74040;
    }
    h2 {
      font-size: 40px;
      color: #252b42;
    }
    p {
      color: #737373;
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
    grid-template-columns: minmax(1fr, 400px);
    grid: "text" "image";
    justify-content: center;
    gap: 50px;
    height: 100%;
    padding: 0 0 50px 0;
  }
`;

export const Plataforma = styled("div")`
  display: grid;
  gap: 20px;
  height: 761px;
  grid: "text image" / 1fr 1fr;
  align-items: center;

  .c-text-grid {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 20px;
    hr {
      background: #e74040;
      width: 97px;
      border: 0;
      height: 7px;
    }

    h2 {
      color: #252b42;
      font-size: 40px;
    }

    h4 {
      font-size: 20px;
      font-weight: 700;
      color: #252b42;
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

export const Footer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0 50px 0;
  gap: 30px;
  h2 {
    font-size: 40px;
    max-width: 650px;
  }
  p {
    max-width: 653px;
    color: #737373;
    font-size: 16px;
  }
  div {
    display: flex;

    input {
      height: 50px;
      width: 300px;
      border: 2px solid #e5e5e5;
      padding: 5px;
    }
    input:focus {
      outline: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 3px solid #e74040;
    border-radius: 10px;
    padding: 25px;
    max-width: 600px;

    div {
      font-size: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .c-textarea {
      padding: 10px;
      border: 1px solid #252b42;
      border-radius: 10px;
    }
    select {
      font-size: 14px;
      border: 1px solid #252b42;
      outline: none;
      /* rgba(115, 115, 115, 0.62) */
    }

    input {
      border-radius: 10px;
      border: 1px solid #252b42;
      padding: 10px;
      font-size: 16px;
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
      max-width: 600px;

      div {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .c-textarea {
        width: 100%;
      }
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
