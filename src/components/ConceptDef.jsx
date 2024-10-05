import { motion } from "framer-motion";

const ConceptDef = ({title, listDescription}) => {
    return (
        <>
            <motion.h1 className="slide-title" animate={{ y: -20, opacity: 1 }} >{title}</motion.h1>
            <ol>
                {
                    listDescription.map(description => <motion.li
                        key={crypto.randomUUID()} 
                        initial={{ y: 50 }} // Estado inicial de la animación
                        animate={{ y: 0 }}  // Estado final de la animación
                        exit={{ y: -50 }}
                    >
                        {description}
                    </motion.li>)
                }
            </ol>
        </>
    )
}

export default ConceptDef;
