function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src= {props.usuarioImg} alt ="usuario"/>
            <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
            </div>
            </div>
    
            <div class="seguir">Seguir</div>
        </div>
    )
}



export default function Sugestoes (){
    const sugestoes = [ 
                        {"usuarioImg":"/img/bad.vibes.memes.svg" ,"nome":"bad.vibes.memes" ,"razao":"Segue você"},
                        {"usuarioImg":"/img/chibirdart.svg"  ,"nome":"chibirdart" ,"razao":"Segue você"},
                        {"usuarioImg": "/img/razoesparaacreditar.svg" ,"nome":"razoesparaacreditar" ,"razao":"Novo no Instagram"},
                        {"usuarioImg":"/img/adorable_animals.svg"  ,"nome":"adorable_animals" ,"razao":"Segue você"},
                        {"usuarioImg": "/img/smallcutecats.svg" ,"nome":"smallcutecats" ,"razao":"Segue você"}

    ]
    return (
        <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    
        {sugestoes.map((s) => <Sugestao usuarioImg={s.usuarioImg} nome ={s.nome }razao ={s.razao}/> )}
        </div>
    )
}