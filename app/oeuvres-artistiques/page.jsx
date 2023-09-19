
// import Head from "next/head"
// import Link from 'next/link'
// import Craft from "./Craft"
import ArtworkForm from "./ArtworkForm"
// import {getAllArtworks,getAllArtists,getAllExpos} from "../../lib/galerie"
import expos_datas from "../expositions-gallerie-art-kynome/expos_datas.json"
import artistes_datas from "../artistes-panafricains/artistes_datas.json"
import oeuvres_datas from "./oeuvres_datas.json"



export const metadata = {
    title: 'Oeuvres Galerie KYNOME',
    description: "Les oeuvres d'art d'artistes de la réion Ouest-Africaine et ivoiriens, à Abidjan Cocody 2plateaux Rue des Jardins: Kynome."
}


export default async function ArtworkPage() {

    // const datas = await getAllArtworks()
    // , artists = await getAllArtists()
    // , expos = await getAllExpos()
    const datas = oeuvres_datas
    , artists = artistes_datas
    , expos = expos_datas
console.log(datas)

    return (<>
            <h2>TOUTES NOS OEUVRES PARAINÉES AU BOUT DU CLIC !</h2>
            <ArtworkForm {...{datas,artists,expos}}/>
    </>)
}

