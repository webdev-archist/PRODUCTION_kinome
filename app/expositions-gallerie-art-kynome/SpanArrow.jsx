'use client'
import { useContext } from 'react'
import Link from 'next/link'
import GlobalContext from "../GlobalContext"


export default ({ arrow }) => {
    const {activedExpo,dates_before,dates_after} = useContext(GlobalContext)

    , which = arrow == "<" ? 0 : 1
    /*
    , handleNextExpo = (e) => {
        // alert(which)
        console.log(activedExpo.length?"oui":"non")
        if(!which){
            if(activedExpo.length)dates_after.unshift(activedExpo)
            setActivedExpo(dates_before.pop())
            setDates_before([...dates_before])
            setDates_after([...dates_after])
        }else{
            if(activedExpo.length)dates_before.push(activedExpo)
            setActivedExpo(dates_after.shift())
            setDates_before([...dates_before])
            setDates_after([...dates_after])
        }
    }
    */
    if(!which&&dates_before.at(-1) || which&&dates_after[0])
        return <Link href={"/expositions-gallerie-art-kynome/" + (!which ? dates_before.at(-1)[2] : dates_after[0][2])}>
            {arrow}
        </Link>
    else return <span>{arrow}</span>
}
