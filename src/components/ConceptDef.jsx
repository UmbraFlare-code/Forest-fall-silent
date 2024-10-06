import { motion } from "framer-motion";

const ConceptDef = ({title, description, img, reverse=false}) => {
    return (
        <section className={`desc-container center-all ${reverse && "reverse"}`}>
            <div className="image-description">
                <img src={img} alt={img.replace(".jpg", "")} />
            </div>
            <div className="desc-info">
                <motion.h1 className="slide-title" animate={{ y: -20, opacity: 1 }} >{title}</motion.h1>
                <ol>
                    {
                        description.map(description => <motion.li
                            key={crypto.randomUUID()} 
                            initial={{ y: 50 }} // Estado inicial de la animación
                            animate={{ y: 0 }}  // Estado final de la animación
                            exit={{ y: -50 }}
                        >
                            {description}
                        </motion.li>)
                    }
                </ol>

            </div>
        </section>
    )
}

export default ConceptDef;
