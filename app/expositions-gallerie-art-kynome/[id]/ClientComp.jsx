'use client'
import { useContext,useEffect } from "react"
import GlobalContext from "../../GlobalContext"

export default ({id}) => {
    const {dates,activedExpo,setActivedExpo,dates_before,setDates_before,dates_after,setDates_after} = useContext(GlobalContext)

    , reloadActivedExpo = () => {
        setDates_before(dates.filter((item,i) => (new Date(item[1])<new Date(activedExpo?.[0] || new Date()))))
        setDates_after(dates.filter((item,i) => (new Date(item[0])>new Date(activedExpo?.[0] || new Date()))))
    }
    useEffect(() => {
        exposCalendar.classList.add('expoAlreadySelected')
        const before = dates_before.find((item,i) => (item[2]==id))
        , after = dates_after.find((item,i) => (item[2]==id))
        console.group()
        console.log(dates_before)
        console.log(dates_after)
        console.log(before)
        console.log(after)
        console.log(before ? before : after)
        console.groupEnd()
        setActivedExpo(before ? before : after)
        console.log(activedExpo)
        setTimeout(() => {
            console.log(activedExpo)

        },3000)
    }, [])
    useEffect(() => {
        console.log(activedExpo)
        reloadActivedExpo()
    }, [activedExpo])

    return <>
        {/* {activedExpo} */}
    </>
}

