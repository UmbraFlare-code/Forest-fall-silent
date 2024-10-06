import { motion } from "framer-motion";

const SlideTitle = ({title}) => {
    return (
        <div className="esp-container">
            <div className="one">
                <motion.h1 className="slide-title" animate={{ y: -20, opacity: 1 }} >{title}</motion.h1>
            </div>
        </div>
    )
}

export default SlideTitle;
