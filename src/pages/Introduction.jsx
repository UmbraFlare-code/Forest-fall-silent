import { useState } from "react";
import { motion } from "framer-motion";
import FaceIntro from "../components/FaceIntro";
import ConceptDef from "../components/ConceptDef";
import PrevNextButton from "../components/PrevNextButton";
import { slides, limit, urls } from "../content/Introduction";
import '../styles/Introduction.css';

const Introduction = () => {
    const [slide, setSlide] = useState(0);

    return(
        <main> 
            <motion.div
                key={slide} // Es importante que uses una `key` que cambie para cada slide
                initial={{ opacity: 0, x: 50 }} // Estado inicial de la animación
                animate={{ opacity: 1, x: 0 }}  // Estado final de la animación
                exit={{ opacity: 0, x: -50 }}   // Animación de salida
                transition={{ duration: 0.5 }}   // Duración de la animación
            >
                {slide === 0 ? (
                    <FaceIntro />
                ) : (
                        <ConceptDef title={slides[slide - 1].title} listDescription={slides[slide - 1].lstDesc} />
                    )}
            </motion.div>
            <PrevNextButton slide={slide} setSlide={setSlide} limit={limit} urls={urls} />
        </main>
    )
}

export default Introduction;
