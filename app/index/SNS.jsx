import Image from "next/image"
import Link from "next/link"


export default function SNS() {

    const links = {
        youtube: "https://www.youtube.com/channel/"
        , facebook: "https://www.facebook.com/"
        , x: "https://twitter.com/"
        , tiktok: "https://www.tiktok.com/fr/"
        , instagram: "https://www.instagram.com/"
    }

    
    
    return <div>
        <h3>VIA NOS RÉSEAUX SOCIAUX</h3>
        <ul>
            {Object.keys(links).map((item,i) => <li>
                <a href={links[item]} target="_blank" title={item}>
                <Image
                    src={`/img/${item}.svg`}
                    alt={`Page ${item} de la Galerie kynome`}
                    layout='fill'
                />
                </a>
            </li>)}
        </ul>
    </div>
}
