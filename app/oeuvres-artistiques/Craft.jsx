import Link from 'next/link'

import ZoomIn from "./ZoomIn"



export default ({data, i}) => <>
{/* {JSON.stringify(data)}--- */}
    <Link href={"/oeuvres-artistiques/"+i}>
        <figure>
            <picture>
                {/* {data["photos_$_file"]?.map((item,i) => <img src={item} />)} */}
                <img src={data["photos_$_file"][0]} />
            </picture>
            <figcaption>
                <h3>{data.title}</h3>
                <p>{data.prix}</p>
                <Link href={"/artistes-panafricains/"}>{data?.artiste || "Amadeus Mozart"}</Link>
                <p>{data.descr}</p>
            </figcaption>
            <ZoomIn pic={data["photos_$_file"][0]} />
        </figure>
    </Link>
</>
