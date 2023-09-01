import ExpoSelected from '../ExpoSelected'
import ClientComp from './ClientComp'

export default ({ params }) => {



    console.log(params)

    return <>
        <ClientComp id={params.id} />
        <ExpoSelected>
            <a href="#">lien vers l'expo en cours (as children)</a>
        </ExpoSelected>
    </>
}
