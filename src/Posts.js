function ItemPost(props){
  return (
  <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.perfil} alt ="perfil"/>
              {props.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.conteudo} alt ="conteudo"/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.perfilCurtida} alt ="perfil"/>
              <div class="texto">
                Curtido por <strong>{props.nomeCurtida} </strong> e <strong>outras {props.curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
)

}

export default function Posts(){
   const posts = [
        {"perfil": "/img/meowed.svg", "nome": "meowed", "conteudo": "/img/gato-telefone.svg",
          "perfilCurtida": "/img/respondeai.svg" ,"nomeCurtida": "respondeai" , "curtidas": 101523 },

       {"perfil": "/img/barked.svg", "nome": "barked", "conteudo": "/img/dog.svg",
       "perfilCurtida": "/img/adorable_animals.svg" ,"nomeCurtida": "adorable_animals" , "curtidas": 99159 }
   ]

  

    return (
<div class="posts">
        {posts.map((p) => <ItemPost perfil={p.perfil} nome={p.nome} conteudo={p.conteudo} 
                          perfilCurtida = {p.perfilCurtida} nomeCurtida = {p.nomeCurtida} curtidas = {p.curtidas} />)}
      </div>
      )
}