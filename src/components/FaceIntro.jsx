import { motion } from "framer-motion";

const FaceChapter = () => {
    return (
        <>
            <motion.h1 animate={{ x: -20 }}>Introduction</motion.h1>
            <div className="avatar-presentation">    
                <div className="presentation">
                    <p>En lo profundo del corazón del Amazonas, donde la vida florece con una energía inagotable, habita un ser antiguo conocido como el Guardian of Climate. Este protector ancestral ha vigilado la selva desde tiempos inmemoriales, cuidando del delicado equilibrio que sostiene a millones de especies y a la humanidad misma. Su misión: preservar la salud de la Tierra y educar a las personas sobre los peligros que amenazan este frágil ecosistema.</p>
                    <p>Guardian of Climate es la voz del Amazonas, y ahora ha decidido compartir su sabiduría con nosotros, mostrándonos cómo nuestras acciones impactan al planeta. Él no solo vigila los árboles y los ríos, sino que siente cómo el aire que respiramos cambia con cada emisión de gases dañinos, y observa con dolor cómo la biodiversidad se desvanece bajo el manto de la deforestación.</p>
                </div>
                <div className="avatar flex-row">    
                    <img src="/Guardian.png" alt="Guardian"/>
                </div>
            </div>
        </>
    )
}

export default FaceChapter;
