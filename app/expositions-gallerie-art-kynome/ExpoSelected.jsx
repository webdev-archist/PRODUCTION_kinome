'use client'
import Link from 'next/link'
import { useContext, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import GlobalContext from "../GlobalContext"
import ShowArtworks from "../components/_/ShowArtworks"

export default function SelectedExpo({ id, children }) {
  const { dates
    , activedExpo
    , setActivedExpo
    , dates_before
    , setDates_before
    , dates_after
    , setDates_after } = useContext(GlobalContext)

  // , reloadActivedExpo = () => {
  // }

  let [test, setTest] = useState(false)
  
  useEffect(() => {
    exposCalendar.classList.add('doCurrentExpoExist')
    const before = dates_before.find((item, i) => (item[2] == id))
      , after = dates_after.find((item, i) => (item[2] == id))
    console.group()
    console.log(id)
    console.log(activedExpo)
    console.log(dates_before)
    console.log(dates_after)
    console.log(before)
    console.log(after)
    console.log(before ? before : after ? after : activedExpo)
    console.groupEnd()
    setActivedExpo(before ? before : after ? after : activedExpo)
    setTest(true)
  }, [])
  useEffect(() => {
    // console.log(activedExpo)
    // reloadActivedExpo()
    setDates_before(dates.filter((item, i) => (new Date(item[1]) < new Date(activedExpo?.[0] || new Date()))))
    setDates_after(dates.filter((item, i) => (new Date(item[0]) > new Date(activedExpo?.[0] || new Date()))))
  }, [activedExpo,id])


  // console.log(dates)
  // console.log(activedExpo)title
  // console.log(expos_datas)
  // const ok = expos_datas.filter((item,i) => (item["openningDate_$_date"]== activedExpo[0]&& item["closingDate_$_date"]==activedExpo[1]))
  // console.log(ok)
  const data = dates.find((item,i) => (item[0]== activedExpo?.[0]&& item[1]==activedExpo?.[1])
    )?.[3]
  , nowDate = new Date()
  console.log(activedExpo)
  console.log(data)
  let nextExpo = { du: "", au: "" }




const images = [
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
]
const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

const PHOTO_SET = [
  {
    src: "https://picsum.photos/id/1018/1920/1080/",
    width: 4,
    height: 3
  },
  {
    src: "https://picsum.photos/id/1018/1920/1080/",
    width: 1,
    height: 1
  }
];
  
  

  return (<>
    {/* {activedExpo.join(', ')} */}

    {/*}
    expoSelected:
    {children}
    <p>{!activedExpo && `...AUCUNE EXPOSITION EN COURS...`}</p>
    <p>PROCHAINE EXPOSITION DU {nextExpo.du} AU {nextExpo.au}</p>

    <hr />
    */}
    {test && 
      createPortal(
        <>
          <img src={"/img/expos/"+data?.["affiche_$_file"]} alt={data?.slogan} />
          <figcaption>{data?.slogan}</figcaption>
        </>
        , document.querySelector('#activedExpoImage')
      )
    }
    <h3>
      <span className="btn status">
        exposition
        { nowDate > new Date(data?.["closingDate_$_date"])
          ? " passé" 
          : nowDate < new Date(data?.["openningDate_$_date"])
            ? " à venir"
            : " en cours"
        }
      </span>
      {data?.title}
      <span className="btn category">RUPESTRE</span>
    </h3>
    <h4>
      <a href="#" target="_blank">
        <img src="/img/fb.svg" alt="Partager sur facebook" title="Partager sur facebook" />
      </a>
      <a href="#" target="_blank">
        <img src="/img/instagram.svg" alt="Partager sur instagram" title="Partager sur instagram" />
      </a>
      {data?.slogan}
      <a href="#" target="_blank">
        <img src="/img/x.webp" alt="Partager sur X" title="Partager sur X" />
      </a>
      <a href="#" target="_blank">
        <img src="/img/tiktok.svg" alt="Partager sur tiktok" title="Partager sur tiktok" />
      </a>
    </h4>
    <div className='expo_top'>
      <ul className="expo_top_images">
        <li><img src="/img/expos/un.png" alt="" /></li>
        <li><img src="/img/expos/deux.jpg" alt="" /></li>
        <li><img src="/img/expos/trois.jpg" alt="" /></li>
      </ul>
      <ul className="expo_top_details">
          <li>Du <span>{data?.["openningDate_$_date"]}</span>, au <span>{data?.["closingDate_$_date"]}</span></li>
          <li>Artistes présents: {data?.["artistes_$_ref_µ_artists"].join()}</li>
      </ul>
      <p>{data?.descr}</p>
    </div>
    <div className="expo_bottom">
      <section>
        <h3>Les artistes</h3>
        <ul className="expo_bottom__artistes">
          {data?.["artistes_$_ref_µ_artists"].map((elt,i) => <li key={"expo_artiste"+i}><Link href="#">
            <h3>TRAORE MORY</h3>
            <img src={"/img/artistes/okok.png"} alt={"donnée fictives"} title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veritatis libero at sequi. Maiores, quae ad dicta itaque harum neque explicabo praesentium incidunt veritatis at quaerat eligendi fugiat sed alias?" />
          </Link></li>)}
        </ul>
      </section>
      <ShowArtworks />
    </div>
  </>)
}
