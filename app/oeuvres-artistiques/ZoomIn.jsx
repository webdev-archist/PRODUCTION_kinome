'use client'
import { useContext } from "react"

import GlobalContext from "../GlobalContext"





export default ({pic}) => {
    const { setAsideModal,setAsideModalContent } = useContext(GlobalContext)


    const handleZoom = e => {
        // e.stopPropagation()
        console.log(e._reactName)

        if(e._reactName == "onMouseOut"){
            setAsideModal(null)
            setAsideModalContent("")
        }
        if(e._reactName == "onMouseOver"){
            console.log(e.clientX)
            console.log(window.innerWidth/2)
            console.log(e.clientX < (window.innerWidth/2))
            
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
