
export default function({title,text,iframe}) {
    return <>
      <section id="kynome">
          <h2>{title}</h2>
          {text && <p>{text}</p>}
      </section>
      {iframe && <iframe width="560" height="315" src={iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
    </>
  }
  