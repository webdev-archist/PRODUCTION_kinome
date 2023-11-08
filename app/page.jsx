
// import Image from 'next/image'
// import { useState } from "react";
import Link from 'next/link'
// import Image from "next/image"
// import './page.module.css'
import Diapo from "./components/_/Diapo"
import ArticleSlider from "./components/_/ArticleSlider"
import NowExpo from "./index/NowExpo"
import ListLastExpos from "./index/ListLastExpos"
import KynomePost from "./index/KynomePost"
import Fondateurs from "./index/Fondateurs"
import Location from "./index/Location"
import Contact from "./index/Contact"
// import img from 


export const metadata = {
  title: 'Accueil KYNOME',
  description: "Galerie d'art à Abidjan Cocody Rue des Jardins 2plateaux"
}

export default function Home() {


  
  return (<>
    <main id="home">
      <ArticleSlider/>
      {/* <Diapo /> */}

      
      {/* <NowExpo/>
      <ListLastExpos/> */}
      <KynomePost />
      <Fondateurs />
      <hr />
      <Location />
      <Contact />
      {/*
      <section className="topArtists">
        <h2>Nos artistes les plus populaires: </h2>
        {// ul>(li>(figure>img+figcaption)+p)*2 }
        <ul>
          <li>
            <figure>
              <img src="" alt="" />
              <figcaption></figcaption>
            </figure>
            <p>description de l'artiste: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus facilis error consectetur corrupti dolorum dolores ut, repudiandae deserunt, corporis, similique natus? Similique, ad. Ducimus nemo quibusdam fugiat voluptatibus placeat!
            Expedita error, ab labore velit ullam illum quibusdam blanditiis facilis voluptates reiciendis aut? At voluptates nihil corporis unde, vitae asperiores odio quia, praesentium inventore atque velit. Vitae quisquam placeat consectetur.</p>
          </li>
          <li>
            <figure>
              <img src="" alt="" />
              <figcaption></figcaption>
            </figure>
            <p></p>
          </li>
        </ul>
      </section>
      */}
    </main>
  </>)
}
