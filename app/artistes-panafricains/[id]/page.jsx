import ShowArtiste from "./ShowArtiste"
import ShowArtworks from "../../components/_/ShowArtworks"
// import {getOneArtist} from "../../../lib/galerie"
import artistes_datas from "../artistes_datas.json"



export default async ({ params }) => {

    console.log(params.id)
    // const artiste = await getOneArtist(params.id)
    const artiste = artistes_datas[params.id]
    console.log(artiste)
    const birthdate = new Date(artiste?.["naissance_$_date"]).getFullYear()
    
    
    console.log(artiste)
    // console.log(params)
    // console.log(params.id)

    return <>
        <ShowArtiste artiste={artiste} birthdate={birthdate} />
        {false && <ShowArtworks />}
    </>
}
