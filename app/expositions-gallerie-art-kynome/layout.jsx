import Diapo from "../components/_/Diapo"
import ExposCalendar from './ExposCalendar'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/a11y';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-cube';
// import 'swiper/element/css/effect-coverflow';
// import 'swiper/element/css/effect-cube';

export default ({children}) => {
    return (
        <main id="expositionsGallerieArtKynome">
            {/* <Diapo /> */}
            <ExposCalendar />
            <section id="expoSelected">
                {children}
            </section>
        </main>
    )
}
