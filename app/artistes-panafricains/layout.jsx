import Post from "../components/_/Page_IntroPost"
import Diapo from "../components/_/Diapo"
import SearchBar from "./SearchBar"

export default ({children}) => {
    
    const postProps = {
        title: "RETROUVEZ LES ARTISTES MISE EN AVANT PAR LA GALLERIE KYNOME"
        , text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem et id quaerat deserunt quia deleniti aspernatur earum similique nemo? Fugit repellat aperiam placeat modi laudantium, dolor architecto dolorum aliquam!"
    }
    return (
        <main id="artistesPanafricains">
            <Post {...postProps} />
            {/* <Diapo /> */}
            <SearchBar />
            {children}
        </main>
    )
}
