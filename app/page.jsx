'use client'

// import Image from 'next/image'
import React, { useState } from "react";
import Link from 'next/link'
import Slider from "react-slick";
import Image from "next/image"
import styles from './page.module.css'
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
  return (<main>
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
    <section className="nowExpo">
      <h2>Expositions en cours: <span>13~27 Juin 2023</span></h2>
      <h3>Le sourire de la femme </h3>
      <h4>Fakhoury Artiste</h4>
      <Image
          loader={myLoader}
          src={"/img/fb_pages.svg"}
          alt="Puissance Divine :  vente en ligne chrÃ©tien catholique, Puissance Divine :  vente en ligne religieux, Puissance Divine :  maria valtorta, Puissance Divine :  librairie vente en ligne, Puissance Divine :  maria valtorta, " 
          title="sainte bible tob,  librairie ecommerce,  acheter publication religieuse chrÃ©tienne, ecommerce chrÃ©tien,  librairie ecommerce, " 
          width="200"
          height="200"
          // fill="true"
      /> 
      <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illum dolores ipsam mollitia consequatur perferendis corrupti, obcaecati quos! Rerum fugit enim ut nemo eaque mollitia minus eveniet impedit aut culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellat id repellendus, repudiandae molestias veritatis at itaque exercitationem vel quo assumenda in saepe asperiores quis? Aliquam est cum perferendis iusto.</p>
      <Link href="/">Expositions à venir</Link>
    </section>
    <section className="lastExpos">
      <h2>Nos dernières expositions: </h2>
      <h3>Le sourire de la femme </h3>
      <h4>Fakhoury Artiste</h4>
      <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illum dolores ipsam mollitia consequatur perferendis corrupti, obcaecati quos! Rerum fugit enim ut nemo eaque mollitia minus eveniet impedit aut culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellat id repellendus, repudiandae molestias veritatis at itaque exercitationem vel quo assumenda in saepe asperiores quis? Aliquam est cum perferendis iusto.</p>
      {/* <ul>
        <li>
          <figure>
            <img src="/img/fb_pages.svg" alt="" />
            <figcaption></figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="/img/fb_pages.svg" alt="" />
            <figcaption></figcaption>
          </figure>
        </li>
      </ul> */}

    </section>
    <section className="topArtists">
      <h2>Nos artistes les plus populaires: </h2>
      {/* ul>(li>(figure>img+figcaption)+p)*2 */}
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
  </main>)
}
