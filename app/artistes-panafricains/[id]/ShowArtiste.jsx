import Image from "next/image"
export default ({artiste,birthdate}) => <section id="show_artiste">
    <div>
        <p>{artiste.nom} {artiste.prenom} alias {artiste.pseudo}, né en {birthdate} ({artiste.age})</p>
        <p>{artiste.email} - {artiste.tel}</p>
        <p>{artiste.genre}</p>
        <p>{artiste.descr}</p>
        <p>
            {artiste.SNSs.map((item, i) => <a href={item} target="_blank" className="sns" title="vers réseau-social: "></a>)}
        </p>
    </div>
    <ul>
        <Image
            src={"/img/artistes/" + artiste["avatar_$_file"][0]}
            alt={"avatar: " + artiste.pseudo}
            width={50}
            height={50}
        />
        {artiste["photos_$_file"].map((item, i) => <li>
            <Image
                src={"/img/artistes/" + item}
                alt={"photo artiste (n°" + i + "): " + artiste.pseudo}
                layout='fill'
            />
        </li>)}
    </ul>
</section>