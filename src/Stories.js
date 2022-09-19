function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.story} alt="story" />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

export default function Stories() {
  const stories = [
    { story: "/img/9gag.svg", usuario: "9gag" },
    { story: "/img/meowed.svg", usuario: "meowed" },
    { story: "/img/barked.svg", usuario: "barked" },
    {
      story: "/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { story: "/img/wawawicomics.svg", usuario: "wawawicomics" },
    { story: "/img/respondeai.svg", usuario: "respondeai" },
    { story: "/img/filomoderna.svg", usuario: "filomoderna" },
    { story: "/img/memeriagourmet.svg", usuario: " memeriagourmet" },
  ];
  return (
    <div class="stories">
      {stories.map((s) => (
        <Story story={s.story} usuario={s.usuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
