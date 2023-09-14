import Link from 'next/link'

export default function layout({children}) {


    
    return (
        <section className="productSection">
            <Link href={"/oeuvres-artistiques"} className="close"></Link>
            {children}
        </section>
    )
}
