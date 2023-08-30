
import Link from 'next/link'
import Diapo from "../components/_/Diapo"
import ExposCalendar from './ExposCalendar'
import ExpoSelected from './ExpoSelected'
import ExpoList from './ExpoList'



export const metadata = {
    title: 'Expositions Galerie KYNOME',
    description: "Galerie d'art à Abidjan Cocody Rue des Jardins 2plateaux"
}


export default function Expo() {



    
    
    return <>
        <main id="expositionsGallerieArtKynome">
            <Diapo/>
            <ExposCalendar />
            <ExpoSelected>
                <a href="#">lien vers l'expo en cours (as children)</a>
            </ExpoSelected>
            <ExpoList type="past" />
            <ExpoList type="futur"/>
        </main>
    </>
}
