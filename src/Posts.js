import React from "react";
//FUNÇÃO PARA CURTIR

//ao clicar no coração ele fica vermelho
// ao clicar no coração em branco aumenta o número de curtidas e o coração fica vermelho
// ao clicar no coração vermelho ele fica branco e diminui as curtidas
function ItemPost(props) {
  const coracaoVazio = "heart-outline";
  const naoSalvo = "bookmark-outline";
  const [salvo, setSalvar] = React.useState(naoSalvo);
  const [coracao, setCoracao] = React.useState(coracaoVazio);
  const [corCoracao, setCorCoracao] = React.useState("");
  const [curtidas, setCurtidasPrimeiro] = React.useState(props.curtidas);

  function curtir() {
    const coracaoPreenchido = "heart-sharp";
    const coracaoVermelho = "red";
    setCoracao(coracaoPreenchido);
    setCorCoracao(coracaoVermelho);
    setCurtidasPrimeiro(curtidas + 1);
  }
  function descurtir() {
    setCoracao(coracaoVazio);
    setCorCoracao("");
    setCurtidasPrimeiro(curtidas - 1);
  }

  function salvar() {
    const foiSalvo = "bookmark-sharp";
    setSalvar(foiSalvo);
  }

  function desmarcarSalvar() {
    setSalvar(naoSalvo);
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.perfil} alt="perfil" />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          src={props.conteudo}
          alt="conteudo"
          /* onClick={(event) => {
            if (event.detail === 2) {
              coracao === coracaoVazio ? curtir() : descurtir();
            }
          }} */
          onDoubleClick={coracao === coracaoVazio ? curtir : descurtir}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={coracao}
              onClick={coracao === coracaoVazio ? curtir : descurtir}
              style={{ color: corCoracao }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvo}
              onClick={salvo === naoSalvo ? salvar : desmarcarSalvar}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.perfilCurtida} alt="perfil" />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtida} </strong> e{" "}
            <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      perfil: "/img/meowed.svg",
      nome: "meowed",
      conteudo: "/img/gato-telefone.svg",
      perfilCurtida: "/img/respondeai.svg",
      nomeCurtida: "respondeai",
      curtidas: 101523,
    },

    {
      perfil: "/img/barked.svg",
      nome: "barked",
      conteudo: "/img/dog.svg",
      perfilCurtida: "/img/adorable_animals.svg",
      nomeCurtida: "adorable_animals",
      curtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {posts.map((p) => (
        <ItemPost
          perfil={p.perfil}
          nome={p.nome}
          conteudo={p.conteudo}
          perfilCurtida={p.perfilCurtida}
          nomeCurtida={p.nomeCurtida}
          curtidas={p.curtidas}
        />
      ))}
    </div>
  );
}
