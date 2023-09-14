import Image from 'next/image'
import {getOneArtwork} from "../../../lib/galerie"

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
            {JSON.stringify(artwork)}
        </div>
    </>
}
