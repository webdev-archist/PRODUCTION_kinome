'use client'
import { useContext } from "react"

import GlobalContext from "../GlobalContext"





export default ({pic}) => {
    const { setAsideModal,setAsideModalContent } = useContext(GlobalContext)


    const handleZoom = e => {
        // console.log(e.target)
        // e.stopPropagation()
        // console.log(e._reactName)


        if(e._reactName == "onMouseOut"){
            e.target.closest('figure').querySelector('picture').classList.remove("zoomingIn")
            setAsideModal(null)
            setAsideModalContent("")
        }
        if(e._reactName == "onMouseOver"){
            // console.log(e.clientX)
            // console.log(window.innerWidth/2)
            // console.log(e.clientX < (window.innerWidth/2))
            e.target.closest('figure').querySelector('picture').classList.add("zoomingIn")
            
            setAsideModalContent(pic)
            if(e.clientX < (window.innerWidth/2))
                setAsideModal(true)
            else
                setAsideModal(false)
        }
    }
    
    return <span 
        onMouseOver={handleZoom} 
        onMouseOut={handleZoom}
        className="loop"
    >
        <span >🔎</span>
    </span>
}
