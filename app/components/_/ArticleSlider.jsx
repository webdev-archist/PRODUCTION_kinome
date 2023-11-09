"use client"


import { useContext, useState, useEffect } from "react";
import Image from "next/image"
import Slider from "react-slick";
import AuthContext from "../../GlobalContext"

export default function ArticleSlider() {
    const {carousels, carouselName="carouselHome", settingsSlider, myLoader} = useContext(AuthContext)
    , [random_indexes, setRandom_indexes] = useState(new Set())
    , indexes = [1,2,3,4,5,6]

    let it
    console.log(carousels)

    useEffect(() => {
        // setH3(titre)
        // let ok = async () => {
        //   const ok = await fetch("/api/diapo")
        //   , data = await ok.json()
        //   console.log(data);
        //   setModels(data)
        // }
        // ok()


        
        /*
        let random_indexes_ = random_indexes
        while(random_indexes_.size < 10) {
            // random_indexes_.add(Math.ceil(Math.random()*carousels[carouselName].length-1))
            random_indexes_.add(Math.ceil(Math.random()*16))
            //   random_indexes[index] = index
        }
        setRandom_indexes(random_indexes_)
        console.log(random_indexes);
        console.log("TROUVER UN MOYEN D'AFFICHER DES IMAGES ALÉATOIRES DANS LE CAROUSEL")
        */
    }, [])

    
    return <section className={carouselName}>
        {console.log(carousels)}
        {/* {console.log(random_indexes)} */}
        <Slider {...settingsSlider} >
            {/* {JSON.stringify(random_indexes)} */}
            {/* {Array.from(random_indexes).map((item,i) => <figure key={"carousel"+i}> */}
            {Array.from(indexes).map((item,i) => <figure key={"carousel"+i}>
                {/* {console.log(carousels)}
                {console.log(random_indexes)}
                {console.log(item)} */}
                <Image
                    loader={myLoader}
                    // src={"/img/pda/"+carousels[carouselName][item][0]}
                    src={"/gmail/IMG-20231018-WA00"+(parseInt(item)<10?("0"+item):item)+".jpg"}
                    alt={" "+carousels[carouselName][item]?.[1]}
                    width={200}                                    height={200}
                />
                <figcaption>{carousels[carouselName][item]?.[1]}</figcaption>
            </figure>)}
            {/* {carousels[carouselName].map((value) =>{
                for(it in value){
                    value = value[it].map((elt,i) => <section key={carouselName+""+i}>
                        <h1>{elt.h1}</h1>
                        <Image
                            loader={myLoader}
                            src={`/img/_/${it}/${elt.src}`}
                            alt={" "}
                            width={200} height={500}
                        />
                        <p>{elt.p}</p>
                    </section>)
                }
                return value
            })} */}
        </Slider>
    </section>
}
