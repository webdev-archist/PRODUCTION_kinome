'use client'

import { useState } from "react";
import Link from 'next/link'
import Slider from "react-slick";
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"


let settingsSlider = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true
}


export default function ArtistesPanafricains({datas}) {

    let [showArtist, setShowArtist] = useState({})
    
    
    return (
        <main id="artistesPanafricains">
            <Slider {...settingsSlider} >
                <figure>
                    <h3>Un teste</h3>
                    <Link href="/">lien ici</Link>
                </figure>
                <figure>
                    <h3>Un teste1</h3>
                    <Link href="/">lien ici</Link>
                </figure>
                <figure>
                    <h3>Un teste2</h3>
                    <Link href="/">lien ici</Link>
                </figure>
            </Slider>
            <SearchBar {...{setShowArtist,artistes: datas}} />
            <SearchResult {...{artist: showArtist}}/>
        </main>
    )
}


export async function getStaticProps(){

    datas = {}

    return {
        props: {
            datas
        }
    }
}
