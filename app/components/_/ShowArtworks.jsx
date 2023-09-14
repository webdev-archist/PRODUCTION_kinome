'use client'

import {useState} from 'react'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import NextJsImage from "./ShowArtworks/NextJsImage";
// import Gallery from "next-gallery"
import GalleryMasonry from 'react-photo-gallery'; // http://neptunian.github.io/react-photo-gallery/
import CoverflowEffect from "./ShowArtworks/ReactSwiperCoverEffect" // https://github.com/kidjp85/react-id-swiper
// import 'swiper/css/swiper.css'// import "swiper/swiper.scss";




export default function ShowArtworks() {
  const [open, setOpen] = useState(false);
  return <>
    <section>
      <h3>
        Les oeuvres
        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>
      </h3>
      {/* <ul className="expo_bottom_oeuvres">
      {data?.["oeuvres_$_ref_µ_oeuvres"].map(elt => <li><Link href="#">
        <h3>La galère et la route</h3>
        <img src={"github_pp.jpeg"} alt={"donnée fictives"} title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veritatis libero at sequi. Maiores, quae ad dicta itaque harum neque explicabo praesentium incidunt veritatis at quaerat eligendi fugiat sed alias?" />
      </Link> </li>
      )}
    </ul> */}
      {/* N'A PAS MARCHÉ */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/img/artistes/github_pp.jpeg",
            title: "Slide title",
            description: "Slide description",
          },
          {
            src: "/img/artistes/okok.png",
            title: "Slide title",
            description: "Slide description",
          },
        ]}
        render={{ slide: NextJsImage, thumbnails: NextJsImage }}
        plugins={[Thumbnails, Captions]}
      />
      {/* CA NON PLUS PAS MARCHÉ */}
      {/* <Gallery {...{images, widths, ratios}} /> */}
      <CoverflowEffect />
      {/* <GalleryMasonry photos={PHOTO_SET} /> */}
    </section>
  </>
}
