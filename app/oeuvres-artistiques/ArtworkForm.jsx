'use client'
import { useState, useEffect, useContext } from "react"
import GlobalContext from "../GlobalContext"
import Craft from "./Craft"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function ArtworkForm({ datas, artists, expos }) {
    console.log(datas)
    console.log(artists)
    console.log(expos)
    const changeSelect = (hookArray,targetValue) => {
        if(hookArray.includes(targetValue))
            return [...hookArray.filter((item,i) => (item!==targetValue))]
        return [...hookArray,targetValue]
    }
    , handleChangeText = (e) => {

        // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
        alert("handleChangeText")
    }
    , handleChangeSubmit = (e,type,targetValue) => {

        setSelectedCrafts(datas)        
        
        if(type=="genre")setFormSelectGenre([...changeSelect(formSelectGenre,targetValue)])
        if(type=="artiste")setFormSelectArtiste([...changeSelect(formSelectArtiste,targetValue)])


        // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
    }

    let [selectedCrafts, setSelectedCrafts] = useState(datas)
    , [formText, setFormText] = useState("")
    , [formSelectGenre, setFormSelectGenre] = useState([])
    , [formSelectArtiste, setFormSelectArtiste] = useState([])
    // , [showSelectionOptionTags, setShowSelectionOptionTags] = useState([<></>])
    , {asideModal, setAsideModal,asideModalContent} = useContext(GlobalContext)
    , [genreList,__vide__] = useState(Array.from(new Set(selectedCrafts.map(item => item.genre))))
    // console.log(genreList)

    useEffect(() => {

        console.log(formSelectGenre)
        if(formSelectGenre.length)setSelectedCrafts(selectedCrafts.filter((item,i) => {
            console.log("craft genre: "+item.genre+" ...."+formSelectGenre.join(','))
            
            return formSelectGenre.includes(item.genre)
        }))
        // if(formSelectArtiste.length)setSelectedCrafts(selectedCrafts.filter((item,i) => formSelectArtiste.includes(item["artistes_$_ref"])))
        // LA CONDITION CI-DESSUS DOIT ETRE REFAITE LORSQUE LES DONNÉES DES POEUVRES COMPRENDRONT UN ARTISTE
        
    }, [formSelectGenre,formSelectArtiste])


    return <>
        <form className="searchBar">
            <fieldset className="searchBar__text_oSelect">
                <label className="searchText_Popup">
                    <input defaultValue={formText} className="searchText" onChange={handleChangeText} placeholder="Taper un nom d'oeuvre d'artiste de genre... ex: Religieux" />
                </label>
                <label className="searchSelect_Popup genre">
                    <select onChange={e => {handleChangeSubmit(e,"genre",e.target.value)}} 
                    defaultValue={formSelectGenre.at(-1) || ""}
                        // onFocus={e => {e.target.size=e.target.length}} 
                        // onBlur={e => {e.target.size=1}}
                    >
                        <option value="">default</option>
                        {genreList.map(item => <option value={item}>{item}</option>)}
                        {/* {showSelectionOptionTags} */}
                    </select>
                </label>
                <label className="searchSelect_Popup artiste">
                    <select onChange={e => {handleChangeSubmit(e,"artiste",e.target.options[e.target.selectedIndex].innerHTML)}} 
                        defaultValue={formSelectArtiste.at(-1) || ""}
                        // onFocus={e => {e.target.size=e.target.length}} 
                        // onBlur={e => {e.target.size=1}}
                    >
                        <option value="">default</option>
                        {artists.map((item,i) => <option key={"artistsOptionTags" + i} value={"artist_" + i}>{item.pseudo} - {item.nom} - {item.prenom}</option>)}
                        {/* {showSelectionOptionTags} */}
                    </select>
                </label>
            </fieldset>
            {/* <img id="contextualOeuvreImage" /> */}
            <ouput>
                {formSelectGenre.map((item,i) => <span>{item}</span>)}
                <hr />
                {formSelectArtiste.map((item,i) => <span>{item}</span>)}
            </ouput>
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
