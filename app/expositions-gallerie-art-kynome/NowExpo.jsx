'use client'

import { redirect } from 'next/navigation'
import {useContext,useEffect} from "react"
import GlobalContext from "../GlobalContext"


export default () => {
    const {dates,activedExpo,setActivedExpo,setDates_before,setDates_after} = useContext(GlobalContext)


    useEffect(() => {
        //RESET LES DONNÉES DES EXPOS
        const nowDate = new Date()
        , currentExpo = dates.filter((item,i) => (new Date(item[0])<nowDate && new Date(item[1])>nowDate))
        // console.log(activedExpo)
        setActivedExpo(currentExpo[0] || null)
        setDates_before(dates.filter((item,i) => (new Date(item[1])<new Date(nowDate))))
        setDates_after(dates.filter((item,i) => (new Date(item[0])>new Date(nowDate))))

        
        // console.log(document.querySelector('#exposCalendar'))
        // if(activedExpo && document.querySelector('#exposCalendar'))
        if(activedExpo)
            exposCalendar.classList.add('expoAlreadySelected')
        else 
            exposCalendar.classList.remove('expoAlreadySelected')
        // console.log(activedExpo)
    }, [activedExpo])

    if(!activedExpo)
        return <>
            <p>Navré ..aucune exposition actuellement :(</p>
            <p>Dans le calendrier ci-dessus &nbsp;&nbsp;Veuillez choisir une exposition..</p>
        </>
    else return redirect("/expositions-gallerie-art-kynome/"+activedExpo[2])
    // else return <>{activedExpo[0]+ "___" +activedExpo[1]}</>
}
