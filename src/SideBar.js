import Usuario from "./Usuario"


export default function SideBar(){
    return (
    <div class="sidebar">
    <Usuario/>

    <div class="sugestoes">
    <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
    </div>

    <div class="sugestao">
        <div class="usuario">
        <img src="/img/bad.vibes.memes.svg" alt ="usuario"/>
        <div class="texto">
            <div class="nome">bad.vibes.memes</div>
            <div class="razao">Segue você</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>

    <div class="sugestao">
        <div class="usuario">
        <img src="/img/chibirdart.svg" alt ="usuario"/>
        <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>

    <div class="sugestao">
        <div class="usuario">
        <img src="/img/razoesparaacreditar.svg" alt ="usuario"/>
        <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>

    <div class="sugestao">
        <div class="usuario">
        <img src="/img/adorable_animals.svg" alt ="usuario"/>
        <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>

    <div class="sugestao">
        <div class="usuario">
        <img src="/img/smallcutecats.svg" alt ="usuario"/>
        <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    </div>

    <div class="links">
    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
    Hashtags • Idioma
    </div>

    <div class="copyright">
    © 2021 INSTAGRAM DO FACEBOOK
    </div>
    </div>
    )
}