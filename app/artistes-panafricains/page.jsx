
// import { useState } from "react";
import Head from "next/head"
import Link from 'next/link'
// import Slider from "react-slick";
import SearchResult from "./SearchResult"


export const metadata = {
  title: 'Page artiste gallerie KYNOME',
  description: "Galerie d'art à Abidjan Cocody Rue des Jardins 2plateaux"
}


export default function({datas}) {

    
    
    return <>
        <SearchResult />
    </>
}



