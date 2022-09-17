import React from "react";
export default function Usuario() {
  const fotoPadrao = "/img/catanacomics.svg";
  const nomePadrao = "Catana";
  const [foto, setFoto] = React.useState(fotoPadrao);
  const [nome, setNome] = React.useState(nomePadrao);

  function ModificarImagem() {
    const alterarFoto = prompt("Insira o link da imagem do seu perfil!");
    setFoto(alterarFoto);
  }
  
  function ModificarNome() {
    const alterarNome = prompt("Qual é o nome de usuário?");
    setNome(alterarNome);
  }

  return (
    <div class="usuario">
      <img
        src={
          foto === "" || foto === null || foto === undefined
            ? fotoPadrao
            : ` ${foto}`
        }
        alt="imagem de perfil do usuário"
        onClick={ModificarImagem}
      />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {nome === "" || nome === null || nome === undefined
            ? nomePadrao
            : ` ${nome}`}

          <ion-icon name="pencil" onClick={ModificarNome}></ion-icon>
        </span>
      </div>
    </div>
  );
}
