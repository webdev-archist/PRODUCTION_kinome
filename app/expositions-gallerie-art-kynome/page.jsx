
import Link from 'next/link'
import ExpoList from './ExpoList'
import SubmitExpo from './SubmitExpo'
import NowExpo from './NowExpo'
import json from "./expos_datas.json"




export const metadata = {
    title: 'Expositions Galerie KYNOME',
    description: "Galerie d'art à Abidjan Cocody Rue des Jardins 2plateaux"
}


export default () => {



    
    
    return <>
        <NowExpo />
        <SubmitExpo />
    </>
}
    {/* <ExpoList type="past" />
            <ExpoList type="futur"/> */}