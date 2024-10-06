import { useState } from "react";
import { motion } from "framer-motion";
import FaceChapter from "../components/FaceChapter";
import PrevNextButton from "../components/PrevNextButton";
import { slides, limit, urls } from "../content/Chapter2";

const Chapter2 = ({}) => {
    const [slide, setSlide] = useState(0);

    return (
        <main>
            <motion.div
                key={slide} // Es importante que uses una `key` que cambie para cada slide
                initial={{ opacity: 0, x: 50 }} // Estado inicial de la animación
                animate={{ opacity: 1, x: 0 }}  // Estado final de la animación
                exit={{ opacity: 0, x: -50 }}   // Animación de salida
                transition={{ duration: 0.5 }}   // Duración de la animación
            > 
                {   slide === 0 ?
                    <FaceChapter 
                        title={"Chapter 2"}
                        description={"Methano"}
                        img={'/chapter-1-wall.jpg'}
                        alt={"Rio en el amazonas"}
                    /> :
                    slides.filter((_, i) => i === slide - 1 ) }
            </motion.div>
            <PrevNextButton slide={slide} setSlide={setSlide} limit={limit} urls={urls} />
        </main>
    )
}

export default Chapter2;
