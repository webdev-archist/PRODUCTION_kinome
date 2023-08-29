import { useState } from "react";





export default function SearchBar({setShowArtist,artistes}) {

    let [filteredArtists,setFilteredArtists] = useState(artistes)
    const handleChange = (e) => {
        alert("filter artistes with \"setFilteredArtists\"")
    }
    , handleClickArtiste = (e,elt) => {
        alert('show artiste', elt)
        // setShowArtist(elt)
    }


    return (
        <form>
            <fieldset>
                <label>
                    <input onChange={handleChange} />
                </label>
            </fieldset>
            <output>
                {artistes.map((elt) => <figure
                    onClick={e=>{handleClickArtiste(e,elt)}}
                >
                    <img src={elt.src} alt={elt.alt} />
                    <figcaption>{elt.title}</figcaption>
                </figure>)}
            </output>
        </form>
    )
}
