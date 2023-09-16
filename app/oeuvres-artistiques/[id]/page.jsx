import Image from 'next/image'
import {getOneArtwork} from "../../../lib/galerie"
import AddToCartBtn from "./AddToCartBtn"


export const metadata = {
    title: 'Expositions Galerie KYNOME',
    description: "Galerie d'art à Abidjan Cocody Rue des Jardins 2plateaux"
}

export default async function page({params}) {

    const {id} = params
    , artwork = await getOneArtwork(id)

    console.log("artwork")
    console.log(artwork)
    console.log("artwork")
    
    return <>
        <figure>
            <picture>
                <Image 
                    src={artwork["photos_$_file"][0]} 
                    alt={artwork.slogan} 
                    fill={true}
                />
            </picture>
            <figcaption>
                {artwork["photos_$_file"].map((item,i) => <Image 
                    src={item} 
                    alt={artwork.slogan} 
                    fill={true}
                />)}
            </figcaption>
        </figure>
        <div id="artworkDetails">
            {/* {JSON.stringify(artwork)} */}
            <div>
                <span>{artwork.prix}</span>
                <p>
                    <span className='btn'>{artwork.genre}</span>
                    <span className='btn'>{artwork['released_$_date']}</span>
                </p>
            </div>
            <p>Artiste: {artwork['artistes_$_ref']}</p>
            <p>{artwork.title}</p>
            <p>{artwork.slogan}</p>
            <p>Description: {artwork.descr}</p>
            <p></p>
            <AddToCartBtn artwork={artwork} />
        </div>
    </>
}
