
// import Head from "next/head"
// import Link from 'next/link'
// import Craft from "./Craft"
import ArtworkForm from "./ArtworkForm"
import {getAllArtworks,getAllArtists,getAllExpos} from "../../lib/galerie"



export const metadata = {
    title: 'Oeuvres Galerie KYNOME',
    description: "Les oeuvres d'art d'artistes de la réion Ouest-Africaine et ivoiriens, à Abidjan Cocody 2plateaux Rue des Jardins: Kynome."
}


export default async function ArtworkPage() {

    const datas = await getAllArtworks()
    , artists = await getAllArtists()
    , expos = await getAllExpos()
console.log(datas)

    return (<>
            <h2>TOUTES NOS OEUVRES PARAINÉES AU BOUT DU CLIC !</h2>
            <ArtworkForm {...{datas,artists,expos}}/>
    </>)
}

