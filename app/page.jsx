'use client'

// import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link'
import Slider from "react-slick";
import Image from "next/image"
import './page.module.css'
import NowExpo from "./page/NowExpo"
import ListLastExpos from "./page/ListLastExpos"
import KynomePost from "./page/KynomePost"
import Location from "./page/Location"
import Fondateurs from "./page/Fondateurs"
// import img from 

let  settingsSlider = {
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
, myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (<main id="home">
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
    <NowExpo/>
    <ListLastExpos/>
    <KynomePost />
    <Location />
    <Fondateurs />
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
  </main>)
}