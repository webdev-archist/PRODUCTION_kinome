'use client'
import { useState, useContext } from "react"
import GlobalContext from "../GlobalContext"
import Craft from "./Craft"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function ArtworkForm({ datas, artists, expos }) {
    console.log(datas)
    console.log(artists)
    console.log(expos)
    const handleChangeType = (e) => {
        const id = e.target.id
            , artistsOptionTags = artists.map((elt, i) => <option key={"artistsOptionTags" + i} value={"artist_" + i}>{elt.pseudo} - {elt.nom} - {elt.prenom}</option>)
            , exposOptionTags = expos.map((elt, i) => <option key={"exposOptionTags" + i} value={"oeuvre_" + i}>{elt.title}</option>)

        setShowSelectionOptionTags(id == "radioExpos" ? { exposOptionTags } : { artistsOptionTags })
        // setShowSelectionOptionTags(id == "radioExpos" ? <>{exposOptionTags}</> : <>{artistsOptionTags}</>)
        alert(id)
    }
        , handleChangeSelect = (e) => {

            // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
            alert("handleChangeSelect")
        }
        , handleChangeText = (e) => {

            // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
            alert("handleChangeText")
        }

    let [selectedCrafts, setSelectedCrafts] = useState(datas)
        , [showSelectionOptionTags, setShowSelectionOptionTags] = useState([<></>])
        ,{asideModal, setAsideModal,asideModalContent} = useContext(GlobalContext)



    return <>
        <form className="searchBar">
            <fieldset>
                <fieldset className="searchBar__text_oSelect">
                    <label>
                        <input id="searchOeuvreText" onChange={handleChangeText} />
                    </label>
                    <label>
                        <select id="searchOeuvreSelect" onChange={handleChangeSelect}>
                            <option value="">default</option>
                            {showSelectionOptionTags}
                        </select>
                    </label>
                </fieldset>
                <label>
                    <span className="exposition">expositions</span>
                    <input type="radio" onChange={handleChangeType} name="searchType" id="radioExpos" />
                </label>
                <label>
                    <span className="artistes">artistes</span>
                    <input type="radio" onChange={handleChangeType} name="searchType" id="radioArtists" />
                </label>
            </fieldset>
            <img id="contextualOeuvreImage" />
        </form>

        <section className="figureCards">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {selectedCrafts.map((elt, i) => <Craft key={"selectedCrafts" + i} data={elt} i={i}setAsideModal={setAsideModal} />)}
                </Masonry>
            </ResponsiveMasonry>
        </section>
        {asideModal===false && <aside className="modalL">{asideModalContent&&<img src={asideModalContent}/>}</aside>}
        {asideModal && <aside className="modalR">{asideModalContent&&<img src={asideModalContent}/>}</aside>}
    </>
}
