'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext"


const handleClick = (e,...argRest) => { 

 }



export default function SearchBar() {

    const { showArtist, artistes_datas: artistes, myLoader } = useContext(GlobalContext)

    let [filteredArtists,setFilteredArtists] = useState(artistes)
    , [actived,setActived] = useState(null)
    const handleChange = (e) => {
        alert("filter artistes with \"setFilteredArtists\"")
    }

    console.log(actived)

    return <>
        <h3>RECHERCHER UN ARTISTE: </h3>
        <form className='searchBar'>
            <fieldset className='searchBar__text_oSelect'>
                <label>
                    <input onChange={handleChange} name="search_by_name" placeholder="ex: ACHI Koman Vincent" />
                </label>
                <label>
                    <select name="search_by_category" title="Rechercher par genre"></select>
                </label>
                <label>
                    <select name="search_by_nationality" title="Rechercher par nationalité"></select>
                </label>
            </fieldset>
            <ul>
                {artistes.map((elt,i) => <li onClick={(e) => {setActived(e.target.closest('li').dataset.id)}} data-id={i} className={actived==i ? "active" : ""}>
                    <Link href={"/artistes-panafricains/" + i}>
                        <figure>
                            <Image 
                                loader={myLoader}
                                src={"/img/artistes/" + elt?.["photos_$_file"][Math.ceil(Math.random())]} 
                                alt={elt.alt} 
                                width={50}
                                height={50}
                            />
                            <figcaption>{elt.pseudo}</figcaption>
                            <span title={"genre: "+elt.genre}>{elt.genre}</span>
                        </figure>
                    </Link>
                </li>)}
            </ul>
        </form>
    </>
}
