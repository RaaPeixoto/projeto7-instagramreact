function Icones (props){
  return (
  <ion-icon name={props.nome}></ion-icon>
  )
}

export default function NavBar (){
  const icones = ["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <Icones nome="logo-instagram"/> 
          <div class="separador"></div>
          <img src="/img/logo.png" alt ="logo"/>
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="/img/logo.png" alt ="logo"/>
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
        {icones.map((i)=> <Icones nome={i} /> )}
        </div>

        <div class="icones-mobile">
        <Icones nome="paper-plane-outline"/> 
    
        </div>
      </div>
    </div>
    )
}