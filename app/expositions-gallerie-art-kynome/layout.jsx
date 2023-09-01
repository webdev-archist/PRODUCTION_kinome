import Diapo from "../components/_/Diapo"
import ExposCalendar from './ExposCalendar'

export default ({children}) => {
    return (
        <main id="expositionsGallerieArtKynome">
            <Diapo />
            <ExposCalendar />
            <section id="expo_section">
                {children}
            </section>
        </main>
    )
}
