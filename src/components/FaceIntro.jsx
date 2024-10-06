import { motion } from "framer-motion";

const FaceChapter = () => {
    return (
        <>
            <motion.h1 className="text-center" animate={{ x: -20 }}>Introduction</motion.h1>
            <div className="avatar-presentation">    
                <div className="presentation">
                    <p className="text-center">En lo profundo del corazón del Amazonas, donde la vida florece con una energía inagotable, habita un ser antiguo conocido como el Guardian of Climate. Este protector ancestral ha vigilado la selva desde tiempos inmemoriales, cuidando del delicado equilibrio que sostiene a millones de especies y a la humanidad misma. Su misión: preservar la salud de la Tierra y educar a las personas sobre los peligros que amenazan este frágil ecosistema.</p>
                </div>
                <div className="avatar flex-row">    
                    <img src="/Guardian.png" alt="Guardian"/>
                </div>
            </div>
        </>
    )
}

export default FaceChapter;
