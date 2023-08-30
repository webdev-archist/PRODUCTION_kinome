'use client'

import { createContext, useState } from 'react'


const GlobalContext = createContext()
export default GlobalContext


export const GlobalContextProvider = ({ children }) => {
    let [expoSelected, setExpoSelected] = useState([])


    const context = {expoSelected, setExpoSelected}
    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}
