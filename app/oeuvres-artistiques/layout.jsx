import Post from "../components/_/Page_IntroPost"
// import SearchBar from "./SearchBar"

export default ({children}) => {
    
    const postProps = {
        title: "DES OEUVRES ARTISTIQUES DANS UNE GALERIE VIRTUELLE ECOMMERCE"
        , text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem et id quaerat deserunt quia deleniti aspernatur earum similique nemo? Fugit repellat aperiam placeat modi laudantium, dolor architecto dolorum aliquam!"
    }
    return (
        <main id="oeuvresArtistiques">
            <Post {...postProps} />
            {children}
        </main>
    )
}
