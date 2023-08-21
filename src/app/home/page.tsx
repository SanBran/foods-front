import Image from "next/image";
import bgImage from "./images/bg_home.jpg";
import { Contrail_One } from "next/font/google";

const contrail = Contrail_One({
    subsets: ["latin"],
    weight: ["400"]
})
const Home = () => {

    return (
        <div >
            <header>
            
                <div className="relative">
                <Image alt="fondo" className=" w-screen h-screen" src={bgImage}/>
                <h2 className={`absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl `}>
                    <span className={contrail.className} > 
                RECIPES FOR ALL <br /> PALATES...
                    </span>
                     </h2>
                </div>
                
            </header>
            <main>


            </main>
            <footer>

            </footer>
        </div>
    )
}


export default Home;
