import React from 'react'

export default function SelectedExpo({children,data={},currentExpo=false}) {


  let nextExpo = {du:"",au:""}
  
  return (
    <section id="expoSelected">
      expoSelected: 
      {children}
      <p>{!currentExpo&&`...AUCUNE EXPOSITION EN COURS...`}</p>
      <p>PROCHAINE EXPOSITION DU {nextExpo.du} AU {nextExpo.au}</p>

      <hr />

      <h2>{data.title}</h2>
      <div>
        <p>Du: {data.opening_date}, au: {data.closing_date}</p>
        <p>De: {data.opening_date}, à: {data.closing_date}</p>
      </div>
      <figure>
        <img src={data.src} alt={data.alt} />
        <figcaption>{data.slogan}</figcaption>
      </figure>
      <p>{data.descr}</p>
      <ul>
        {data?.artistes?.map(elt=><li>
            <img src={elt.src} alt={elt.alt} />
            <div>
              <h3>{elt.title}</h3>
              <p>{elt.descr}</p>
            </div>
          </li>
        )}
      </ul>
    </section>
  )
}
