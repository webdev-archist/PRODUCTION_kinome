


export default function SearchResults({artist}) {
  return (
    <section>
        <figure>
            <img src={artist.src} alt={artist.alt} />
            <figcaption>
                <h2>{artist.slogan}</h2>
                <p>{artist.pseudo} - {artist.nom} - {artist.prenom} - {artist.age}ans</p>
                <p>{artist.email} - {artist.tel}</p>
            </figcaption>
        </figure>
        <div>
            <p>Genre artistique: {artist.genre}</p>
            <p>SNSs: {artist.SNS_links}</p>
            <p>Oeuvres: {artist.oeuvres}</p>
            {/* afficher un bloc pour les phtoso, ou les fusionne rdans le figure */}

            <p>{artist.descr}</p>
        </div>
    </section>
  )
}
