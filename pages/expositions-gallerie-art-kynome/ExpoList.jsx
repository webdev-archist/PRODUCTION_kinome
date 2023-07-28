

export default function ExpoList({type,datas=[]}) {
  return (<section className="exposList">
    <h2>LISTE DES EXPOSITIONS {type=="past"?"PASSÉES":"À VENIR"}: </h2>
    <ul>
      <span>&lt;</span>
      {/* ExpoList: {type} */}
      {datas.map(elt=>{

        return <>
          {/* <li>
            <img src="" alt="" />
            <div>
              <h3></h3>
              <p></p>
            </div>
          </li> */}
          <li>
            <img src={elt.src} alt={elt.alt} />
            <div>
              <h3>{elt.title}</h3>
              <p>
                {elt.descr}
              </p>
            </div>
          </li>
        </>
      })}
      <span>&gt;</span>
    </ul>
  </section>)
}
