import { useState } from "react";
import { motion } from "framer-motion";
import FaceChapter from "../components/FaceChapter";
import PrevNextButton from "../components/PrevNextButton";
import { slides, limit, urls } from "../content/Chapter3";

const Chapter3 = ({}) => {
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
                        title={"Chapter 3"}
                        description={"Saving the future"}
                        img={'/images/chapter3/worlds.jpg'}
                        alt={"world"}
                    /> :
                    slides.filter((_, i) => i === slide - 1 ) }
            </motion.div>
            <PrevNextButton slide={slide} setSlide={setSlide} limit={limit} urls={urls} />
        </main>
    )
}

export default Chapter3;
