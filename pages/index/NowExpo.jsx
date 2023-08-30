import Link from 'next/link'
import Image from "next/image"


export default function NowExpo() {
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }



    return (
        <section id="nowExpo">
            <h2>Expositions en cours: <span>13~27 Juin 2023</span></h2>
            <h3>Le sourire de la femme </h3>
            <h4>Fakhoury Artiste</h4>
            <Image
                // loader={myLoader}
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
    )
}





